import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

import { type Restaurant } from "../../interfaces"

import Jumpscare_Freddy from "../../assets/images/Jumpscare_Freddy.png"
import Jumpscare_Foxy from "../../assets/images/JumpScare_Foxy.png"
import Jumpscare_Chica from "../../assets/images/Jumpscare_Chica.png"
import Jumpscare_Bonnie from "../../assets/images/Jumpscare_Bonnie.png"

import backgroundStyle from "../../styles/background.module.css"

interface JumpScareProps {
    restaurant: Restaurant
    setDone: Dispatch<SetStateAction<boolean>>
}

const JumpScare = ({ 
    restaurant,
    setDone
}: JumpScareProps) => {
    const [jumpScare, setJumpscare] = useState<string | null>(null)

    useEffect(() => {
        let result

        if (restaurant.animatronics.freddy.position <= 0)
            result = Jumpscare_Freddy;
        else if (restaurant.animatronics.foxy.position <= 0)
            result = Jumpscare_Foxy;
        else if (restaurant.animatronics.chica.position <= 0)
            result = Jumpscare_Chica;
        else if (restaurant.animatronics.bonnie.position <= 0)
            result = Jumpscare_Bonnie;
        else result = null;

        if(result) setDone(true)

        setJumpscare(result)
    }, [restaurant]);

    return (
        <>
            {
                jumpScare &&
                <img
                    src = { jumpScare }
                    alt = { jumpScare }
                    className = { backgroundStyle.overlay }
                />
            }
        </>
    )
}

export default JumpScare
