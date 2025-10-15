import type { Dispatch, SetStateAction } from "react";

import officeControls from "../../styles/officeControls.module.css";

interface OfficeControlsProps {
    officeState: {
        left: { light: boolean; door: boolean };
        right: { light: boolean; door: boolean };
    };
    setOfficeState: Dispatch<
        SetStateAction<{
            left: { light: boolean; door: boolean };
            right: { light: boolean; door: boolean };
        }>
    >;
}

const OfficeControls = ({
    officeState, setOfficeState
}: OfficeControlsProps) => {
    const handleToggle = (side: string, operation: string) => {
        const result = {
            left: {
                light: officeState.left.light,
                door: officeState.left.door
            },
            right: {
                light: officeState.right.light,
                door: officeState.right.door
            }
        }


        if(side === "left") {
            if(operation === "light") {
                result.left.light = !officeState.left.light
            }
            else if(operation === "door") {
                result.left.door = !officeState.left.door;
            }
        } else if(side === "right") {
            if(operation === "light") {
                result.right.light = !officeState.right.light;
            } else if(operation === "door") {
                result.right.door = !officeState.right.door;
            }
        }

        setOfficeState(result)
    }

    return (
        <>
            <div className={`${officeControls.left}`}>
                <button
                    className={`${officeControls.officeToggle} ${officeControls.light}`}
                    onClick={() => handleToggle("left", "light")}
                />
                <button
                    className={`${officeControls.officeToggle} ${officeControls.door}`}
                    onClick={() => handleToggle("left", "door")}
                />
            </div>
            <div className={`${officeControls.right}`}>
                <button
                    className={`${officeControls.officeToggle} ${officeControls.light}`}
                    onClick={() => handleToggle("right", "light")}
                />
                <button
                    className={`${officeControls.officeToggle} ${officeControls.door}`}
                    onClick={() => handleToggle("right", "door")}
                />
            </div>
        </>
    );
}

export default OfficeControls;
