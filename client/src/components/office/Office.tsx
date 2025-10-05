import { useState } from 'react'

import OfficeBG from '../backgrounds/OfficeBG'
import ControlPanel from './ControlPanel'

import fit from '../../styles/fit.module.css'

interface SideState {
    light: boolean;
    door: boolean;
}

interface OfficeState {
    left: SideState;
    right: SideState
}

interface OfficeProps {
    bonnie: number;
    chica: number;
}

const Office = ({
    bonnie, chica
}: OfficeProps) => {
    const [officeState, setOfficeState] = useState({
        left: {
            light: false,
            door: false
        },
        right: {
            light: false,
            door: false
        }
    })

    return (
        <div className={fit.game}>
            <div className={fit.aspect}>
                <OfficeBG 
                    officeState = {officeState}
                    bonnie = { bonnie }
                    chica = { chica }
                />
                <ControlPanel 
                    officeState = { officeState }
                    setOfficeState = { setOfficeState }
                />
            </div>
            {true || console.log(officeState)}
        </div>
    );
};

export default Office;
