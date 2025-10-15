import type { Dispatch, SetStateAction } from "react"

import cameraToggle from "../../assets/Camera_Toggle.png"

import backgroundStyle from '../../styles/background.module.css'
import cameraToggleStyle from '../../styles/cameraToggle.module.css'

export interface CameraToggleProps {
    camera: boolean;
    setCamera: Dispatch<SetStateAction<boolean>>;
}

const CameraToggle = ({
    camera,
    setCamera
}: CameraToggleProps) => {
    const handleToggle = () => {
        const result = !camera
        setCamera(result)
    }

    return (
        <>
            <img
                className={`${backgroundStyle.overlay}`}
                src={cameraToggle}
                alt="camera toggle"
            />

            <button 
                className={`${cameraToggleStyle.cameraToggle}`}
                onClick = { () => handleToggle() }
            />
        </>
    );
}

export default CameraToggle