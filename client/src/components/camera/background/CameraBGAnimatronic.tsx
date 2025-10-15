import { type Restaurant } from '../../../Game'

interface CameraBGAnimatronicProps {
    restaurant: Restaurant;
    cameraPos: number;
}

const CameraBGAnimatronic = ({
    restaurant,
    cameraPos
}: CameraBGAnimatronicProps) => {
    const getAnimatronics = (): string[] => {
        let result: string[]


    
        return result
    }

    return (
        <>
            {
                getAnimatronics().forEach(animatronic => {
                    <img
                        src={getCamera()}
                        alt="camera screen"
                        className={backgroundStyle.overlay}
                    />   
                })
            }       
        </>
    )
}

export default CameraBGAnimatronic