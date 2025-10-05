import cameraToggle from "../../assets/Camera_Toggle.png";
import cameraToggleBase from "../../assets/Camera_Toggle_Base.png";

import backgroundStyle from "../../styles/background.module.css";
import uiStyle from "../../styles/ui.module.css";

const CameraToggle = () => {
    return (
        <div className={`${uiStyle.uiElement} ${uiStyle.cameraToggle}`}>
            <img
                src={cameraToggleBase}
                alt="camera toggle base"
                className={backgroundStyle.base}
            />
            <img
                src={cameraToggle}
                alt="camera toggle"
                className={backgroundStyle.overlay}
            />
        </div>
    );
};

export default CameraToggle;
