import Sound_Door from "../assets/sounds/Sound_Door.m4a"
import Sound_Jumpscare from "../assets/sounds/Sound_Jumpscare.m4a"
import Sound_Camera_Flick from "../assets/sounds/Sound_Camera-Flick.m4a"
import Sound_Light_Flick from "../assets/sounds/Sound_Flick-Light.m4a"

export const playDoorSound = () => {
    const sound = new Audio(Sound_Door)

    sound.currentTime = 0.2

    sound.play()
}

export const playJumpscareSound = () => {
    const sound = new Audio(Sound_Jumpscare)

    sound.currentTime = 0

    sound.play()
}

export const playCameraFlickSound = () => {
    const sound = new Audio(Sound_Camera_Flick)

    sound.volume = 1
    sound.currentTime = 0.2

    sound.play()
}

export const playLightSound = () => {
    const sound = new Audio(Sound_Light_Flick)

    sound.currentTime = .5

    sound.play()
}