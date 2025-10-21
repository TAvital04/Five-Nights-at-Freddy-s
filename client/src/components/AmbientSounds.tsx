import Ambient_Audio from "../assets/sounds/Sound_Background.m4a"

let ambientAudio: HTMLAudioElement | null = null

const playAmbientLoop = () => {
    if (ambientAudio) return;

    ambientAudio = new Audio(Ambient_Audio);
    ambientAudio.loop = true;
    ambientAudio.play()
};

const AmbientSounds = () => {
    return(
        <>
            {playAmbientLoop()}
        </>
    )
}

export default AmbientSounds