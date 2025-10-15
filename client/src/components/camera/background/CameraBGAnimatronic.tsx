import { type Restaurant, type Animatronic } from '../../../Game'

import A_1A_Bonnie from "../../../assets/A_1A_Bonnie.png"
import A_1A_Chica from "../../../assets/A_1A_Chica.png"
import A_1A_Freddy from "../../../assets/A_1A_Freddy.png"
import A_1B_Bonnie from "../../../assets/A_1B_Bonnie.png"
import A_1B_Chica from "../../../assets/A_1B_Chica.png"
import A_1B_Freddy from "../../../assets/A_1B_Freddy.png"
import A_1C_Foxy from "../../../assets/A_1C_Foxy.png"
import A_2A_Bonnie from "../../../assets/A_2A_Bonnie.png"
import A_2A_Freddy from "../../../assets/A_2A_Freddy.png"
import A_2B_Bonnie from "../../../assets/A_2B_Bonnie.png"
import A_2B_Freddy from "../../../assets/A_2B_Freddy.png"
import A_3_Freddy from "../../../assets/A_3_Freddy.png"
import A_4A_Chica from "../../../assets/A_4A_Chica.png"
import A_4A_Freddy from "../../../assets/A_4A_Freddy.png"
import A_4B_Chica from "../../../assets/A_4B_Chica.png"
import A_4B_Freddy from "../../../assets/A_4B_Freddy.png"
import A_7_Chica from "../../../assets/A_7_Chica.png"
import A_7_Freddy from "../../../assets/A_7_Freddy.png"

import backgroundStyle from "../../../styles/background.module.css"

interface CameraBGAnimatronicProps {
    restaurant: Restaurant;
    cameraPos: number;
}


const CameraBGAnimatronic = ({
    restaurant,
    cameraPos
}: CameraBGAnimatronicProps) => {
    const getCamera = (): string[] => {
        const result: string[] = []

        switch(cameraPos) {
            case 1.1:
            
            case 1.2:
                return M_1B

            case 1.3:
                return M_1C

            case 2.1:
                return M_2A

            case 2.2:
                return M_2B

            case 3:
                return M_3

            case 4.1:
                return M_4A

            case 4.2:
                return M_4B

            case 5:
                return M_5

            case 6:
                return M_6

            case 7:
                return M_7

            default:
                return M_1A
        }

        return result
    }

    return (
        <>
            {
                getCamera().forEach(camera => {
                    <img
                        src={camera}
                        alt="camera screen"
                        className={backgroundStyle.overlay}
                    />   
                })
            }       
        </>
    )
}

export default CameraBGAnimatronic