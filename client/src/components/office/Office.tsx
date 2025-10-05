import fit from "../../styles/fit.module.css";
import OfficeBG from "../backgrounds/OfficeBG";
import ControlPanel from "./ControlPanel";

const Office = () => {
    return (
        <div className={fit.game}>
            <div className={fit.aspect}>
                <OfficeBG />
                <ControlPanel />
            </div>
        </div>
    );
};

export default Office;
