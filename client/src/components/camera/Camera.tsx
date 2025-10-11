import { type Dispatch, type SetStateAction } from "react";

import type { Restaurant } from "../../Game"

import CameraBG from './background/CameraBG'
import CameraBGAnimatronic from './background/CameraBGAnimatronic'
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
    return (
        <>
            <CameraBG
                cameraPos = { cameraPos }
            />

            <CameraBGAnimatronic
                restaurant = { restaurant }
                cameraPos = { cameraPos }
            />

            <CameraControls
                camera = { cameraPos }
                setCamera = { setCameraPos }
            />
        </>
    )
}

export default Camera