// Imports and constants
    import {useState} from "react"
    import {useInterval} from "usehooks-ts"

// Types
    export type Animatronic = {
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

// Functions
    const calculatePosition = (animatronic: Animatronic): Animatronic => {
        const update = JSON.parse(JSON.stringify(animatronic))

        const movement = Math.floor(Math.random() * 3 - 1)
        let newLocation

        newLocation = movement + animatronic.position
        
        if(newLocation > animatronic.maxPosition) {
            newLocation = animatronic.maxPosition
        } else if(newLocation <= 0) {
            newLocation = -1
        }

        update.position = newLocation
        return update
    }
// Component body
    const Game = () => {
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
        const [count, setCount] = useState(1)
        const [done, setDone] = useState(false)

    // Effects
        // Recalculate restaurant values based on animatronic movement
        useInterval(
            () => {
                let result = JSON.parse(JSON.stringify(restaurant))

                if(count % 10 === 0) {
                    console.log("Freddy moved")
                    console.log(result.animatronics)
                    result = calculatePosition(result.animatronics.freddy)
                }
                if(count % 9 === 0) {
                    console.log("Foxy moved")
                    console.log(result.animatronics)
                    result = calculatePosition(result.animatronics.foxy)
                }
                if(count % 8 === 0) {
                    console.log("Chica moved")
                    console.log(result.animatronics)
                    result = calculatePosition(result.animatronics.chica)
                }
                if(count % 7 === 0) {
                    console.log("Bonnie moved")
                    console.log(result.animatronics)
                    result = calculatePosition(result.animatronics.bonnie)
                }

                setRestaurant(result)
                setCount(() => count + 1)
            }, done? 1 * 1000: null
        )

    // Render the component
            return (
            <>
                {/* {console.log(count) || true}
                {console.log(restaurant) || true} */}
            </>
        )
    }

// Component export
    export default Game