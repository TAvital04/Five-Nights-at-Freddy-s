import { type Dispatch, type SetStateAction } from 'react'

import { type Restaurant } from '../../Game';

import OfficeBG from './OfficeBG'
import OfficeControls from "./OfficeControls";

interface OfficeProps { 
    restaurant: Restaurant
    setRestaurant: Dispatch<SetStateAction<Restaurant>>
}

const Office = ({
    restaurant,
    setRestaurant
}: OfficeProps) => {
    return (
        <>
            <OfficeBG 
                restaurant = { restaurant }
            />
            <OfficeControls 
                restaurant = { restaurant }
                setRestaurant = { setRestaurant }
            />
        </>
    );
};

export default Office;
