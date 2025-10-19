// Imports and constants
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

import Office from "./components/office/Office";
import Camera from "./components/camera/Camera";
import CameraToggle from "./components/camera/CameraToggle"
import JumpScare from "./components/office/JumpScare";

import fit from "./styles/fit.module.css";
import moveAnimatronics from "./utils/movement";

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
        moveAnimatronics(restaurant, cameraPos)
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
