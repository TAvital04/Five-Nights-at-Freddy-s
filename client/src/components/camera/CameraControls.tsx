import type { Dispatch, SetStateAction } from "react";

import { playCameraFlickSound } from "../../utils/sounds.ts"

import cameraControlsStyle from '../../styles/cameraControls.module.css'

interface CameraControlsProps {
    camera: number;
    setCamera: Dispatch<SetStateAction<number>>;
}

const CameraControls = ({
    camera,
    setCamera
}: CameraControlsProps) => {
    const handleCameraSwitch = (camera: number) => {
        playCameraFlickSound()
        setCamera(camera)
    }

    return (
        <>
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c1A}
                `}
                onClick={() => handleCameraSwitch(1.1)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c1B}
                `}
                onClick={() => handleCameraSwitch(1.2)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c1C}
                `}
                onClick={() => handleCameraSwitch(1.3)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c2A}
                `}
                onClick={() => handleCameraSwitch(2.1)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c2B}
                `}
                onClick={() => handleCameraSwitch(2.2)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c3}
                `}
                onClick={() => handleCameraSwitch(3)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c4A}
                `}
                onClick={() => handleCameraSwitch(4.1)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c4B}
                `}
                onClick={() => handleCameraSwitch(4.2)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c5}
                `}
                onClick={() => handleCameraSwitch(5)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c6}
                `}
                onClick={() => handleCameraSwitch(6)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c7}
                `}
                onClick={() => handleCameraSwitch(7)}
            />
        </>
    )
}

export default CameraControls