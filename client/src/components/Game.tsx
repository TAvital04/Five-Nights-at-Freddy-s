// Imports and constants
    import {useState, useEffect} from "react"

    import * as calculatePosition from "../modules/calculatePosition.tsx"

// Types
    type Animatronic = {
        position: number
        maxPosition: number
    }

    export type Restaurant = {
        animatronics: {
            freddy: Animatronic
            foxy: Animatronic
            chica: Animatronic
            bonnie: Animatronic
        }
        time: number
    }

// Component body
    function Game() {
    // Variables
        const [restaurant, setRestaurant] = useState<Restaurant>({
            animatronics: {
                freddy: {
                    position: 5,
                    maxPosition: 5
                },
                foxy: {
                    position: 5,
                    maxPosition: 5
                },
                chica: {
                    position: 5,
                    maxPosition: 5
                },
                bonnie: {
                    position: 5,
                    maxPosition: 5
                }
            },
            time: 36
        })

    // Effects
        // Recalculate restaurant values based on animatronic movement
            // Freddy
                useEffect(() => {
                    const interval = setInterval(() => {
                        setRestaurant(calculatePosition.freddy(restaurant))
                    }, 10 * 1000)

                    return () => clearInterval(interval)
                }, [restaurant])

            // Foxy
                useEffect(() => {
                    const interval = setInterval(() => {
                        setRestaurant(calculatePosition.foxy(restaurant))
                    }, 10 * 1000)

                    return () => clearInterval(interval)
                }, [restaurant])

            // Chica
                useEffect(() => {
                    const interval = setInterval(() => {
                        setRestaurant(calculatePosition.chica(restaurant))
                    }, 10 * 1000)

                    return () => clearInterval(interval)
                }, [restaurant])

            // Bonnie
                useEffect(() => {
                    const interval = setInterval(() => {
                        setRestaurant(calculatePosition.bonnie(restaurant))
                    }, 10 * 1000)

                    return () => clearInterval(interval)
                }, [restaurant])

    // Render the component
            return (
            <>
                
            </>
        )
    }

// Component export
    export default Game