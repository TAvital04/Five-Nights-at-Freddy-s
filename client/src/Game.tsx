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
import AmbientSounds from "./components/AmbientSounds";

// Component body
const Game = () => {
    // Variables
    const [restaurant, setRestaurant] = useState<Restaurant>(newRestaurant());
    const [done, setDone] = useState(false)
    const [cameraToggle, setCameraToggle] = useState(false)
    const [cameraPos, setCameraPos] = useState(1.1)

    // Effects
    useInterval(() => {
        let result = moveAnimatronics(restaurant, cameraPos)

        if(cameraToggle) result.time -= 3
        if(restaurant.office.left.door) result.time -= 3
        if(restaurant.office.right.door) result.time -= 3
        if(restaurant.office.left.light) result.time -= 3
        if(restaurant.office.right.light) result.time -=3

        setRestaurant(result)
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
                {/* <AmbientSounds /> */}
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

                {console.log(`
                    Freddy: ${restaurant.animatronics.freddy.position}
                    Foxy: ${restaurant.animatronics.foxy.position}
                    Chica: ${restaurant.animatronics.chica.position}
                    Bonnie: ${restaurant.animatronics.bonnie.position}
                    Time: ${restaurant.time}
                    Done: ${done}
                `) || true}
            </div>
        </div>
    );
};

// Component export
export default Game;
