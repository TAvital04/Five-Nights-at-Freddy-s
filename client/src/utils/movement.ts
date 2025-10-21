import { type Animatronic, type Restaurant, copyRestaurant } from "../interfaces"

const handleSpecialCases = (
    restaurant: Restaurant,
    cameraPos: number,
    animatronic: Animatronic,
    regularCase: number
): number => {
    if (
        animatronic.name === "chica" &&
        animatronic.position === 1 &&
        restaurant.office.right.door === true
    ) return animatronic.maxPosition

    if (
        animatronic.name === "freddy" && 
        animatronic.position === 1 &&
        restaurant.office.right.door === true
    ) return 1  

    if (
        (
            animatronic.name === "foxy" ||
            animatronic.name === "bonnie"
        ) &&
        animatronic.position === 1 &&
        restaurant.office.left.door === true
    ) return animatronic.maxPosition

    if (
        animatronic.name === "foxy" &&
        cameraPos === 1.3
    ) return Math.min(3, animatronic.maxPosition - animatronic.position)

    return regularCase
}

const moveAnimatronic = (
    restaurant: Restaurant,
    cameraPos: number,
    animatronic: Animatronic
) => {
    let movement = Math.floor(Math.random() * 2 - 1);
    let newLocation;

    movement = handleSpecialCases(restaurant, cameraPos, animatronic, movement)

    newLocation = movement + animatronic.position;

    if(newLocation > animatronic.maxPosition) {
        newLocation = animatronic.maxPosition;
    }

    animatronic.position = newLocation;
}

const moveAnimatronics = (restaurant: Restaurant, cameraPos: number): Restaurant => {
    const result = copyRestaurant(restaurant)

    if(restaurant.time % 10 === 0) {
        moveAnimatronic(restaurant, cameraPos, result.animatronics.freddy);
    }
    if(restaurant.time % 2 === 0) {
        moveAnimatronic(restaurant, cameraPos, result.animatronics.foxy);
    }
    if(restaurant.time % 8 === 0) {
        moveAnimatronic(restaurant, cameraPos, result.animatronics.chica);
    }
    if(restaurant.time % 3 === 0) {
        moveAnimatronic(restaurant, cameraPos, result.animatronics.bonnie);
    }

    result.time -= 1

    return result
}

export default moveAnimatronics