// Imports and constants
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

import Office from "./components/office/Office";
import Camera from "./components/camera/Camera";
import CameraToggle from "./components/camera/CameraToggle"
import JumpScare from "./components/office/JumpScare";

import fit from "./styles/fit.module.css";

// Types
export type Animatronic = {
    name: string;
    position: number;
    maxPosition: number;
};
const copyAnimatronic = (animatronic: Animatronic): Animatronic => {
    return {
        name: animatronic.name,
        position: animatronic.position,
        maxPosition: animatronic.maxPosition
    }
}

export type Office = {
    left: {
        light: boolean
        door: boolean
    },
    right: {
        light: boolean
        door: boolean
    }
}
export const copyOffice = (office: Office): Office => {
    return {
        left: {
            light: office.left.light,
            door: office.left.door
        },
        right: {
            light: office.right.light,
            door: office.right.door
        }
    }
}

export type Restaurant = {
    animatronics: {
        freddy: Animatronic;
        foxy: Animatronic;
        chica: Animatronic;
        bonnie: Animatronic;
    };
    office: Office
    time: number;
};
const copyRestaurant = (restaurant: Restaurant): Restaurant => {
    return {
        animatronics: {
            freddy: copyAnimatronic(restaurant.animatronics.freddy),
            foxy: copyAnimatronic(restaurant.animatronics.foxy),
            chica: copyAnimatronic(restaurant.animatronics.chica),
            bonnie: copyAnimatronic(restaurant.animatronics.bonnie)
        },
        office: copyOffice(restaurant.office),
        time: restaurant.time
    }
}

// Component body
const Game = () => {
    // Variables
    const [restaurant, setRestaurant] = useState<Restaurant>({
        animatronics: {
            freddy: {
                name: "freddy",
                position: 7,
                maxPosition: 7,
            },
            foxy: {
                name: "foxy",
                position: 9,
                maxPosition: 9,
            },
            chica: {
                name: "chica",
                position: 7,
                maxPosition: 7,
            },
            bonnie: {
                name: "bonnie",
                position: 6,
                maxPosition: 6,
            },
        },
        office: {
            left: {
                light: false,
                door: false
            },
            right: {
                light: false,
                door: false
            }
        },
        time: 360,
    });
    const [done, setDone] = useState(false)
    const [cameraToggle, setCameraToggle] = useState(false)
    const [cameraPos, setCameraPos] = useState(1.1)

    // Effects
    useInterval(() => {
        const specialCase = (animatronic: Animatronic, movement: number): boolean => {

        }
        const handleSpecialCases = (animatronic: Animatronic, movement: number) {

        }

        const moveAnimatronic = (animatronic: Animatronic) => {
            const movement = Math.floor(Math.random() * 2 - 1);
            let newLocation;

            if(specialCase(animatronic, movement)) 
                handleSpecialCases(animatronic, movement)

            newLocation = movement + animatronic.position;

            if(newLocation > animatronic.maxPosition) {
                newLocation = animatronic.maxPosition;
            }

            animatronic.position = newLocation;
        }

        const result = copyRestaurant(restaurant)

        if(restaurant.time % 10 === 0) {
            moveAnimatronic(result.animatronics.freddy);
        }
        if(restaurant.time % 2 === 0) {
            moveAnimatronic(result.animatronics.foxy);
        }
        if(restaurant.time % 8 === 0) {
            moveAnimatronic(result.animatronics.chica);
        }
        if(restaurant.time % 3 === 0) {
            moveAnimatronic(result.animatronics.bonnie);
        }

        result.time -= 1

        setRestaurant(result);
    }, done ? null : 1 * 1000)

    useEffect(() => {
        if(restaurant.time <= 0) setDone(true)
    }, [restaurant.time])

    // Render the component
    return (
        <div className={fit.game}>
            <div className={fit.aspect}>
                {   
                    cameraToggle?
                    <Camera 
                        restaurant = { restaurant }
                        cameraPos = { cameraPos }
                        setCameraPos = { setCameraPos }
                    />:
                    <Office 
                        restaurant = { restaurant }
                        setRestaurant = { setRestaurant }
                    />
                }

                <CameraToggle 
                    camera = { cameraToggle }
                    setCamera = { setCameraToggle }
                />

                <JumpScare
                    restaurant = { restaurant }
                    done = { done }
                    setDone = { setDone }
                />
            </div>
            
            { console.log(`
                ${restaurant.animatronics.freddy.position} 
                ${restaurant.animatronics.foxy.position}
                ${restaurant.animatronics.chica.position}
                ${restaurant.animatronics.bonnie.position}
                ${done}
            `) }
        </div>
    );
};

// Component export
export default Game;
