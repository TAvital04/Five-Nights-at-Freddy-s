// Animatronic
    export type Animatronic = {
        name: string;
        position: number;
        maxPosition: number;
    };

    const newAnimatronic = (name: string, maxPosition: number): Animatronic => {
        return {
            name,
            position: maxPosition,
            maxPosition
        }
    }

    const copyAnimatronic = (animatronic: Animatronic): Animatronic => {
        return {
            name: animatronic.name,
            position: animatronic.position,
            maxPosition: animatronic.maxPosition
        }
    }

// Office
    type Office = {
        left: {
            light: boolean
            door: boolean
        },
        right: {
            light: boolean
            door: boolean
        }
    }

    const newOffice= (): Office => {
        return {
            left: {
                light: false,
                door: false
            },
            right: {
                light: false,
                door: false
            }
        }
    }

    export const copyOffice = (office: Office): Office => {
        return {
            left: {
                light: office.left.light,
                door: office.left.door
            },
            right: {
                light: office.right.light,
                door: office.right.door
            }
        }
    }

// Restaurant
    export type Restaurant = {
        animatronics: {
            freddy: Animatronic;
            foxy: Animatronic;
            chica: Animatronic;
            bonnie: Animatronic;
        };
        office: Office
        time: number;
    };

    const newRestaurant = (): Restaurant => {
        return {
            animatronics: {
                freddy: newAnimatronic("freddy", 7),
                foxy: newAnimatronic("foxy", 10),
                chica: newAnimatronic("chica", 7),
                bonnie: newAnimatronic("bonnie", 6)
            },
            office: newOffice(),
            time: 3600
        }
    }

    export const copyRestaurant = (restaurant: Restaurant): Restaurant => {
        return {
            animatronics: {
                freddy: copyAnimatronic(restaurant.animatronics.freddy),
                foxy: copyAnimatronic(restaurant.animatronics.foxy),
                chica: copyAnimatronic(restaurant.animatronics.chica),
                bonnie: copyAnimatronic(restaurant.animatronics.bonnie)
            },
            office: copyOffice(restaurant.office),
            time: restaurant.time
        }
    }