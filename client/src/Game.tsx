// Imports and constants
import { useState } from "react";
import { useInterval } from "usehooks-ts";

import Office from "./components/office/Office";
import Camera from "./components/camera/Camera";
import CameraToggle from "./components/camera/CameraToggle"

import fit from "./styles/fit.module.css";

// Types
export type Animatronic = {
    position: number;
    maxPosition: number;
};

export type Restaurant = {
    animatronics: {
        freddy: Animatronic;
        foxy: Animatronic;
        chica: Animatronic;
        bonnie: Animatronic;
    };
    time: number;
};

// Component body
const Game = () => {
    // Variables
    const [restaurant, setRestaurant] = useState<Restaurant>({
        animatronics: {
            freddy: {
                position: 6,
                maxPosition: 6,
            },
            foxy: {
                position: 9,
                maxPosition: 9,
            },
            chica: {
                position: 6,
                maxPosition: 6,
            },
            bonnie: {
                position: 5,
                maxPosition: 5,
            },
        },
        time: 36,
    });
    const [count, setCount] = useState(1);
    const [done, setDone] = useState(false);
    const [cameraToggle, setCameraToggle] = useState(false)
    const [cameraPos, setCameraPos] = useState(1.1)

    // Functions
    const moveAnimatronic = (animatronic: Animatronic) => {
        const movement = Math.floor(Math.random() * 3 - 1);
        let newLocation;

        newLocation = movement + animatronic.position;

        if (newLocation > animatronic.maxPosition) {
            newLocation = animatronic.maxPosition;
        } else if (newLocation <= 0) {
            setDone(true);
        }

        animatronic.position = newLocation;
    };

    // Effects
    // Recalculate restaurant values based on animatronic movement
    useInterval(
        () => {
            if (count % 10 === 0) {
                moveAnimatronic(restaurant.animatronics.freddy);
            } else if (count % 9 === 0) {
                moveAnimatronic(restaurant.animatronics.foxy);
            } else if (count % 8 === 0) {
                moveAnimatronic(restaurant.animatronics.chica);
            } else if (count % 3 === 0 || count % 4 == 0) {
                moveAnimatronic(restaurant.animatronics.bonnie);
            }

            setRestaurant(restaurant);
            setCount(() => count + 1);
        },
        done ? null : 1000 * 1000
    );

    // Render the component
    return (
        <div className={fit.game}>
            <div className={fit.aspect}>
                {cameraToggle?
                    <Camera 
                        restaurant = { restaurant }
                        cameraPos = { cameraPos }
                        setCameraPos = { setCameraPos }
                    />:
                    <Office 
                        bonnie = { restaurant.animatronics.bonnie.position }
                        chica = { restaurant.animatronics.chica.position }
                    />
                }

                <CameraToggle 
                    camera = { cameraToggle }
                    setCamera = { setCameraToggle }
                />
            </div>
        </div>
    );
};

// Component export
export default Game;
