import { useState } from 'react'

import OfficeBG from './OfficeBG'
import ControlPanel from './ControlPanel'

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
        <>
                <OfficeBG 
                    officeState = {officeState}
                    bonnie = { bonnie }
                    chica = { chica }
                />
                <ControlPanel 
                    officeState = { officeState }
                    setOfficeState = { setOfficeState }
                />
        </>
    );
};

export default Office;
