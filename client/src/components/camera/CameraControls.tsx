import type { Dispatch, SetStateAction } from "react";

import cameraControlsStyle from '../../styles/cameraControls.module.css'

interface CameraControlsProps {
    camera: number;
    setCamera: Dispatch<SetStateAction<number>>;
}

const CameraControls = ({
    camera,
    setCamera
}: CameraControlsProps) => {
    return (
        <>
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c1A}
                `}
                onClick={() => setCamera(1.1)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c1B}
                `}
                onClick={() => setCamera(1.2)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c1C}
                `}
                onClick={() => setCamera(1.3)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c2A}
                `}
                onClick={() => setCamera(2.1)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c2B}
                `}
                onClick={() => setCamera(2.2)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c3}
                `}
                onClick={() => setCamera(3)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c4A}
                `}
                onClick={() => setCamera(4.1)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c4B}
                `}
                onClick={() => setCamera(4.2)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c5}
                `}
                onClick={() => setCamera(5)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c6}
                `}
                onClick={() => setCamera(6)}
            />
            <button
                className={`
                    ${cameraControlsStyle.cameraToggle} 
                    ${cameraControlsStyle.c7}
                `}
                onClick={() => setCamera(7)}
            />
        </>
    )
}

export default CameraControls