// Imports and constants
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

import { newRestaurant, type Restaurant } from "./interfaces";

import Office from "./components/office/Office";
import Camera from "./components/camera/Camera";
import CameraToggle from "./components/camera/CameraToggle"
import JumpScare from "./components/office/JumpScare";

import fit from "./styles/fit.module.css";
import moveAnimatronics from "./utils/movement";

// Component body
const Game = () => {
    // Variables
    const [restaurant, setRestaurant] = useState<Restaurant>(newRestaurant());
    const [done, setDone] = useState(false)
    const [cameraToggle, setCameraToggle] = useState(false)
    const [cameraPos, setCameraPos] = useState(1.1)

    // Effects
    useInterval(() => {
        setRestaurant(moveAnimatronics(restaurant, cameraPos))
    }, done ? null : 1 * 1000)

    useEffect(() => {
        if(restaurant.time <= 0) setDone(true)
    }, [restaurant.time])

    // Functions
    const resetGame = () => {
        setRestaurant(newRestaurant())
        setDone(false)
    }

    // Render the component
    return (
        <div className={fit.game}>
            <div className={fit.aspect}>
                {   
                    cameraToggle && !done?
                    <Camera 
                        restaurant = { restaurant }
                        cameraPos = { cameraPos }
                        setCameraPos = { setCameraPos }
                    />:
                    <Office 
                        restaurant = { restaurant }
                        setRestaurant = { setRestaurant }
                        done = { done }
                        resetGame = { resetGame }
                    />
                }

                {
                    !done &&
                    <CameraToggle 
                        camera = { cameraToggle }
                        setCamera = { setCameraToggle }
                    />
                }

                <JumpScare
                    restaurant = { restaurant }
                    setDone = { setDone }
                />
            </div>
            
            {/*             
                { console.log(`
                    ${restaurant.animatronics.freddy.position} 
                    ${restaurant.animatronics.foxy.position}
                    ${restaurant.animatronics.chica.position}
                    ${restaurant.animatronics.bonnie.position}
                    ${done}
                `) } 
            */}
        </div>
    );
};

// Component export
export default Game;
