// Imports and constants
    import {useState, useEffect} from "react"

// Types
    type Animatronic = {
        position: number
        maxPosition: number
    }

    type Restaurant = {
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
        // Freddy
            useEffect(() => {
                // Functions
                    const reRenderFreddy = (restaurant: Restaurant) => {
                        // Declare variables
                            const freddy = restaurant.animatronics.freddy
                            let movement

                        // Calculate the direction of movement
                            movement = Math.floor(Math.random() * 3 - 1)

                        // Validate and update movement
                            if(freddy.position + movement > freddy.maxPosition) {
                                movement = 0
                            } else if(freddy.position + movement == 0) {
                                movement = -1
                            } else {
                                movement = freddy.position + movement
                            }

                            console.log(restaurant)
                            console.log(movement)

                        // Update the restaurant
                            setRestaurant({
                                animatronics: {
                                    freddy: {
                                        position: movement,
                                        maxPosition: freddy.maxPosition
                                    },
                                    foxy: {
                                        position: restaurant.animatronics.foxy.position,
                                        maxPosition: restaurant.animatronics.foxy.maxPosition
                                    },
                                    chica: {
                                        position: restaurant.animatronics.chica.position,
                                        maxPosition: restaurant.animatronics.chica.maxPosition
                                    },
                                    bonnie: {
                                        position: restaurant.animatronics.bonnie.position,
                                        maxPosition: restaurant.animatronics.bonnie.maxPosition
                                    }
                                },
                                time: restaurant.time
                            })
                    }

                // Body
                    const interval = setInterval(() => {
                        reRenderFreddy(restaurant)
                    }, 10 * 1000)

                // Return
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