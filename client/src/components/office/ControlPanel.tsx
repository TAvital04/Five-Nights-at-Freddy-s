import type { Dispatch, SetStateAction } from "react";
import controlPanelStyle from "../../styles/controlPanel.module.css";

interface ControlPanelProps {
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

const ControlPanel = ({
    officeState, setOfficeState
}: ControlPanelProps) => {
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
            <div className = {`${controlPanelStyle.left}`}>
                <button className={`${controlPanelStyle.light}`} onClick = { () => handleToggle("left", "light") }/>
                <button className={`${controlPanelStyle.door}`} onClick = { () => handleToggle("left", "door")} />
            </div>
            <div className = {`${controlPanelStyle.right}`}>
                <button className={`${controlPanelStyle.light}`} onClick = { () => handleToggle("right", "light") }/>
                <button className={`${controlPanelStyle.door}`} onClick = { () => handleToggle("right", "door")} />
            </div>
        </>
    )
}

export default ControlPanel;
