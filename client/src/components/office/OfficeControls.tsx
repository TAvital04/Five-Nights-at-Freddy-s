import type { Dispatch, SetStateAction } from "react";

import { copyOffice, type Restaurant } from "../../interfaces";

import { playDoorSound } from "../../utils/sounds.ts"

import officeControls from "../../styles/officeControls.module.css";

interface OfficeControlsProps {
    restaurant: Restaurant
    setRestaurant: Dispatch<SetStateAction<Restaurant>>
    done: boolean
    resetGame: () => void
}

const OfficeControls = ({
    restaurant,
    setRestaurant,
    done,
    resetGame
}: OfficeControlsProps) => {
    const handleToggle = (side: string, operation: string) => {
        const result = copyOffice(restaurant.office)


        if(side === "left") {
            if(operation === "light") {
                result.left.light = !restaurant.office.left.light
            }
            else if(operation === "door") {
                result.left.door = !restaurant.office.left.door;
            }
        } else if(side === "right") {
            if(operation === "light") {
                result.right.light = !restaurant.office.right.light;
            } else if(operation === "door") {
                result.right.door = !restaurant.office.right.door;
            }
        }

        if(operation === "door") playDoorSound()

        setRestaurant((prev) => ({...prev, office: result}))
    }

    return (
        <>
            {
                !done &&
                <div className = "doors">
                    <div className={`${officeControls.left}`}>
                        <button
                            className={`
                                ${officeControls.officeToggle} 
                                ${officeControls.light}
                            `}
                            onClick={() => handleToggle("left", "light")}
                        />
                        <button
                            className={`
                                ${officeControls.officeToggle} 
                                ${officeControls.door}
                            `}
                            onClick={() => handleToggle("left", "door")}
                        />
                    </div>
                    <div className={`${officeControls.right}`}>
                        <button
                            className={`
                                ${officeControls.officeToggle} 
                                ${officeControls.light}
                            `}
                            onClick={() => handleToggle("right", "light")}
                        />
                        <button
                            className={`
                                ${officeControls.officeToggle} 
                                ${officeControls.door}
                            `}
                            onClick={() => handleToggle("right", "door")}
                        />
                    </div>
                </div>
            }

            {
                done &&
                <button
                    className = {`
                        ${officeControls.officeToggle} 
                        ${officeControls.reset}
                    `}
                    onClick = { resetGame }
                />
            }
        </>
    );
}

export default OfficeControls;
