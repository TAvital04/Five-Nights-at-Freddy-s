import S_1A from '../../../assets/S_1A.png'
import S_1B from '../../../assets/S_1B.png'
import S_1C from '../../../assets/S_1C.png'
import S_2A from '../../../assets/S_2A.png'
import S_2B from '../../../assets/S_2B.png'
import S_3 from '../../../assets/S_3.png'
import S_4A from '../../../assets/S_4A.png'
import S_4B from '../../../assets/S_4B.png'
import S_5 from '../../../assets/S_5.png'
import S_6 from '../../../assets/S_6.png'
import S_7 from '../../../assets/S_7.png'


import backgroundStyle from '../../../styles/background.module.css'

interface CameraBGScreenProps {
    cameraPos: number;
}

const CameraBGScreen = ({
    cameraPos
}: CameraBGScreenProps) => {
    const getCamera = (): string => {
        switch(cameraPos) {
            case 1.1:
                return S_1A

            case 1.2:
                return S_1B

            case 1.3:
                return S_1C

            case 2.1:
                return S_2A

            case 2.2:
                return S_2B

            case 3:
                return S_3

            case 4.1:
                return S_4A

            case 4.2:
                return S_4B

            case 5:
                return S_5

            case 6:
                return S_6

            case 7:
                return S_7

            default:
                return S_1A
        }
    }

    return (
        <>
            <img
                src={getCamera()}
                alt="camera screen"
                className={backgroundStyle.overlay}
            />            
        </>
    )
}

export default CameraBGScreen