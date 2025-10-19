import CameraBGScreen from './CameraBGScreen'
import CameraBGMap from './CameraBGMap'
import CameraBGAnimatronic from './CameraBGAnimatronic';

import { type Restaurant } from "../../../interfaces"

interface CameraBGProps {
    cameraPos: number;
    restaurant: Restaurant;
}

const CameraBG = ({
    cameraPos,
    restaurant
}: CameraBGProps) => {


    return (
        <>
            <CameraBGScreen
                cameraPos = { cameraPos }
            />

            <CameraBGAnimatronic
                cameraPos = { cameraPos }
                restaurant = { restaurant }
            />
            
            <CameraBGMap
                cameraPos = { cameraPos }
            />
        </>
    )
}

export default CameraBG