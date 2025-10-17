import { useEffect, type Dispatch, type SetStateAction } from "react";

import type { Restaurant } from "../../Game"

import CameraBG from './background/CameraBG'
import CameraControls from './CameraControls'

interface CameraProps {
    restaurant: Restaurant;
    cameraPos: number;
    setCameraPos: Dispatch<SetStateAction<number>>; 
}

const Camera = ({
    restaurant,
    cameraPos,
    setCameraPos
}: CameraProps) => {
    useEffect(() => {
        if(cameraPos == 1.3) restaurant.animatronics.foxy.position += 1
    }, [])

    return (
        <>
            <CameraBG
                cameraPos = { cameraPos }
                restaurant = { restaurant }
            />

            <CameraControls
                camera = { cameraPos }
                setCamera = { setCameraPos }
            />
        </>
    )
}

export default Camera