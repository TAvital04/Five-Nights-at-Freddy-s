import CameraBGScreen from './CameraBGScreen'
import CameraBGMap from './CameraBGMap'

import backgroundStyle from '../../../styles/background.module.css'

interface CameraBGProps {
    cameraPos: number;
}

const CameraBG = ({
    cameraPos
}: CameraBGProps) => {


    return (
        <>
            <CameraBGScreen
                cameraPos = { cameraPos }
            />

            <CameraBGMap
                cameraPos = { cameraPos }
            />
        </>
    )
}

export default CameraBG