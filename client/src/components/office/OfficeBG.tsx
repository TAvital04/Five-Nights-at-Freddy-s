import type { Dispatch, SetStateAction } from "react";

import { type Restaurant } from "../../interfaces";

import office from "../../assets/Office.png";

import officeControls from "../../assets/Office_Controls.png";

import hallsDark from "../../assets/Office_Dark.png";
import hallsLeft from "../../assets/Office_Hall_Left.png";
import hallsRight from "../../assets/Office_Hall_Right.png";
import hallsBonnie from "../../assets/Office_Bonnie.png";
import hallsChica from "../../assets/Office_Chica.png";

import doorLeft from "../../assets/Office_Door_Left.png";
import doorRight from "../../assets/Office_Door_Right.png";

import reset from "../../assets/Office_Reset.png"

import backgroundStyle from "../../styles/background.module.css";

interface OfficeBGProps {
    restaurant: Restaurant
    done: boolean
}

const OfficeBG = ({
    restaurant,
    done
}: OfficeBGProps) => (
    <div>
        <img
            src = { hallsDark }
            alt = "halls dark"
            className = { backgroundStyle.overlay }
        />

        {   
            restaurant.office.left.light && 
            (
                <img
                    src = { hallsLeft }
                    alt = "halls left"
                    className = { backgroundStyle.overlay }
                />
            )
        }
        {
            restaurant.office.left.light && 
            restaurant.animatronics.bonnie.position == 1 && 
            (
                <img
                    src = { hallsBonnie }
                    alt = "bonnie"
                    className = { backgroundStyle.overlay }
                />
            )
        }
        {
            restaurant.office.left.door && 
            (
                <img
                    src = { doorLeft }
                    alt = "door left"
                    className = { backgroundStyle.overlay }
                />
            )
        }

        {
            restaurant.office.right.light && 
            (
                <img
                    src = { hallsRight }
                    alt = "halls right"
                    className = { backgroundStyle.overlay }
                />
            )
        }
        {
            restaurant.office.right.light && 
            restaurant.animatronics.chica.position == 1 && 
            (
                <img
                    src = { hallsChica }
                    alt = "chica"
                    className = { backgroundStyle.overlay }
                />
            )
        }
        {
            restaurant.office.right.door && 
            (
                <img
                    src = { doorRight }
                    alt = "door right"
                    className = { backgroundStyle.overlay }
                />
            )
        }

        <img 
            src = { office } 
            alt = "office" 
            className = { backgroundStyle.overlay } 
        />
        
        <img
            src={officeControls}
            alt="controls"
            className={backgroundStyle.overlay}
        />

        {
            done &&
            <img
                src = { reset }
                alt = "reset button"
                className = { backgroundStyle.overlay }
            />
        }
    </div>
);

export default OfficeBG;
