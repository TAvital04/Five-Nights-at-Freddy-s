// Imports and constants
    import type {Restaurant} from "../components/Game.tsx"

// Freddy
    export const freddy = (restaurant: Restaurant): Restaurant => {
        // Declare variables
            const freddy = restaurant.animatronics.freddy
            let movement
            const updatedRestaurant = {...restaurant}

        // Calculate the direction of movement
            movement = freddy.position + Math.floor(Math.random() * 3 - 1)

        // Validate and update movement
            if(movement > freddy.maxPosition) {
                movement = freddy.maxPosition
            } else if(movement <= 0) {
                movement = -1
            }

        // Return an updated restaurant
            updatedRestaurant.animatronics.freddy.position = movement
            return updatedRestaurant
    }

// Foxy
    export const foxy = (restaurant: Restaurant): Restaurant => {
        // Declare variables
            const foxy = restaurant.animatronics.foxy
            let movement
            const updatedRestaurant = {...restaurant}

        // Calculate the direction of movement
            movement = foxy.position + Math.floor(Math.random() * 3 - 1)

        // Validate and update movement
            if(movement > foxy.maxPosition) {
                movement = foxy.maxPosition
            } else if(movement <= 0) {
                movement = -1
            }

        // Return an updated restaurant
            updatedRestaurant.animatronics.foxy.position = movement
            return updatedRestaurant
    }

// Chica
    export const chica = (restaurant: Restaurant): Restaurant => {
        // Declare variables
            const chica = restaurant.animatronics.chica
            let movement
            const updatedRestaurant = {...restaurant}

        // Calculate the direction of movement
            movement = chica.position + Math.floor(Math.random() * 3 - 1)

        // Validate and update movement
            if(movement > chica.maxPosition) {
                movement = chica.maxPosition
            } else if(movement <= 0) {
                movement = -1
            }

        // Return an updated restaurant
            updatedRestaurant.animatronics.chica.position = movement
            return updatedRestaurant
    }

// Bonnie
    export const bonnie = (restaurant: Restaurant): Restaurant => {
        // Declare variables
            const bonnie = restaurant.animatronics.bonnie
            let movement
            const updatedRestaurant = {...restaurant}

        // Calculate the direction of movement
            movement = bonnie.position + Math.floor(Math.random() * 3 - 1)

        // Validate and update movement
            if(movement > bonnie.maxPosition) {
                movement = bonnie.maxPosition
            } else if(movement <= 0) {
                movement = -1
            }

        // Return an updated restaurant
            updatedRestaurant.animatronics.bonnie.position = movement
            return updatedRestaurant
    }
