import M_1A from '../../../assets/M_1A.png'
import M_1B from '../../../assets/M_1B.png'
import M_1C from '../../../assets/M_1C.png'
import M_2A from '../../../assets/M_2A.png'
import M_2B from '../../../assets/M_2B.png'
import M_3 from '../../../assets/M_3.png'
import M_4A from '../../../assets/M_4A.png'
import M_4B from '../../../assets/M_4B.png'
import M_5 from '../../../assets/M_5.png'
import M_6 from '../../../assets/M_6.png'
import M_7 from '../../../assets/M_7.png'

import backgroundStyle from "../../../styles/background.module.css"

interface CameraBGMapProps {
    cameraPos: number;
}

const CameraBGMap = ({
    cameraPos
}: CameraBGMapProps) => {
    const getCamera = (): string => {
        switch(cameraPos) {
            case 1.1:
                return M_1A
            
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
    }

    return (
        <>
            <img
                src={getCamera()}
                alt="camera map"
                className={backgroundStyle.map}
            />
        </>
    )
}

export default CameraBGMap