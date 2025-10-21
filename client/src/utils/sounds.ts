import Sound_Door from "../assets/sounds/Sound_Door.m4a"

export const playDoorSound = () => {
    const sound = new Audio(Sound_Door)

    sound.currentTime = 0.2

    sound.play()
}