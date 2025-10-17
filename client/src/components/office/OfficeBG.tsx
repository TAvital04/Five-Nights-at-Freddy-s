import office from "../../assets/Office.png";

import officeControls from "../../assets/Office_Controls.png";
import hallsDark from "../../assets/Office_Dark.png";
import hallsLeft from "../../assets/Office_Hall_Left.png";
import hallsRight from "../../assets/Office_Hall_Right.png";
import hallsBonnie from "../../assets/Office_Bonnie.png";
import hallsChica from "../../assets/Office_Chica.png";
import doorLeft from "../../assets/Office_Door_Left.png";
import doorRight from "../../assets/Office_Door_Right.png";

import backgroundStyle from "../../styles/background.module.css";

interface OfficeBGProps {
    officeState: {
        left: { light: boolean; door: boolean };
        right: { light: boolean; door: boolean };
    };
    bonnie: number;
    chica: number;
}

const OfficeBG = ({
    officeState,
    bonnie,
    chica
}: OfficeBGProps) => (
    <div>
        <img
            src={hallsDark}
            alt="halls dark"
            className={backgroundStyle.overlay}
        />

        {officeState.left.light && (
            <img
                src={hallsLeft}
                alt="halls left"
                className={backgroundStyle.overlay}
            />
        )}
        {officeState.left.light && bonnie == 1 && (
            <img
                src={hallsBonnie}
                alt="bonnie"
                className={backgroundStyle.overlay}
            />
        )}
        {officeState.left.door && (
            <img
                src={doorLeft}
                alt="door left"
                className={backgroundStyle.overlay}
            />
        )}

        {officeState.right.light && (
            <img
                src={hallsRight}
                alt="halls right"
                className={backgroundStyle.overlay}
            />
        )}
        {officeState.right.light && chica == 1 && (
            <img
                src={hallsChica}
                alt="chica"
                className={backgroundStyle.overlay}
            />
        )}
        {officeState.right.door && (
            <img
                src={doorRight}
                alt="door right"
                className={backgroundStyle.overlay}
            />
        )}

        <img src={office} alt="office" className={backgroundStyle.overlay} />
        <img
            src={officeControls}
            alt="controls"
            className={backgroundStyle.overlay}
        />
    </div>
);

export default OfficeBG;
