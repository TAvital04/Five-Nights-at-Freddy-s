import { type Dispatch, type SetStateAction } from 'react'

import { type Restaurant } from '../../interfaces';

import OfficeBG from './OfficeBG'
import OfficeControls from "./OfficeControls";

interface OfficeProps { 
    restaurant: Restaurant
    setRestaurant: Dispatch<SetStateAction<Restaurant>>
    done: boolean
    resetGame: () => void
}

const Office = ({
    restaurant,
    setRestaurant,
    done,
    resetGame
}: OfficeProps) => {
    return (
        <>
            <OfficeBG 
                restaurant = { restaurant }
                done = { done }
            />
            <OfficeControls 
                restaurant = { restaurant }
                setRestaurant = { setRestaurant }
                done = { done }
                resetGame = { resetGame }
            />
        </>
    );
};

export default Office;
