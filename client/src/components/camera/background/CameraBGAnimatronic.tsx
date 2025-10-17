import { type Restaurant, type Animatronic } from '../../../Game'

import A_1A_Bonnie from "../../../assets/A_1A_Bonnie.png"
import A_1A_Chica from "../../../assets/A_1A_Chica.png"
import A_1A_Freddy from "../../../assets/A_1A_Freddy.png"
import A_1B_Bonnie from "../../../assets/A_1B_Bonnie.png"
import A_1B_Chica from "../../../assets/A_1B_Chica.png"
import A_1B_Freddy from "../../../assets/A_1B_Freddy.png"
import A_1C_Foxy from "../../../assets/A_1C_Foxy.png"
import A_2A_Bonnie from "../../../assets/A_2A_Bonnie.png"
import A_2B_Bonnie from "../../../assets/A_2B_Bonnie.png"
import A_3_Freddy from "../../../assets/A_3_Freddy.png"
import A_4A_Chica from "../../../assets/A_4A_Chica.png"
import A_4A_Freddy from "../../../assets/A_4A_Freddy.png"
import A_4B_Chica from "../../../assets/A_4B_Chica.png"
import A_4B_Freddy from "../../../assets/A_4B_Freddy.png"
import A_5_Bonnie from "../../../assets/A_5_Bonnie.png"
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
        const bonnie = restaurant.animatronics.bonnie
        const chica = restaurant.animatronics.chica
        const foxy = restaurant.animatronics.foxy
        const freddy = restaurant.animatronics.freddy

    const getCamera = (): string[] => {
        const result: string[] = []

        const getAnimatronicCamera = (s: string) => {
            <img
                src={s}
                alt={s}
                className={backgroundStyle.overlay}
            />            
        }

        switch(cameraPos) {
            case 1.1:
                if(bonnie.position == 5) getAnimatronicCamera(A_1A_Bonnie)
                if(chica.position == 5) getAnimatronicCamera(A_1A_Chica)
                if(freddy.position == 7) getAnimatronicCamera(A_1A_Freddy)

                break

            case 1.2:
                if(bonnie.position == 4) getAnimatronicCamera(A_1B_Bonnie)
                if(chica.position == 4) getAnimatronicCamera(A_1B_Chica)
                if(freddy.position == 6) getAnimatronicCamera(A_1B_Freddy) 
                    
                break

            case 1.3:
                if(foxy.position == 1) getAnimatronicCamera(A_1C_Foxy)
                
                break

            case 2.1:
                if(bonnie.position == 2) getAnimatronicCamera(A_2A_Bonnie)
                
                break

            case 2.2:
                if(bonnie.position == 1) getAnimatronicCamera(A_2B_Bonnie)
                
                break

            case 3:
                if(freddy.position == 4) getAnimatronicCamera(A_3_Freddy)

                break

            case 4.1:
                if(chica.position == 2) getAnimatronicCamera(A_4A_Chica)
                if(freddy.position == 2) getAnimatronicCamera(A_4A_Freddy)

                break

            case 4.2:
                if(chica.position == 1) getAnimatronicCamera(A_4B_Chica)
                if(freddy.position == 1) getAnimatronicCamera(A_4B_Freddy)     
                    
                break

            case 5:
                if(bonnie.position == 3) getAnimatronicCamera(A_5_Bonnie)
                
                break

            case 6:
                break

            case 7:
                if(chica.position == 4) getAnimatronicCamera(A_7_Chica)
                if(freddy.position == 3) getAnimatronicCamera(A_7_Freddy)

                break

            default:
                
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