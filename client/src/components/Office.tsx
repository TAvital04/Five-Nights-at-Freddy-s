import imageStyle from "../styles/imageStyle.module.css"

import office from "../assets/Office.png"
import officeHalls from "../assets/office_halls.png"

const Office = () => {

    return (
        <>
            <div className = {imageStyle.background}>
                <img src = {officeHalls} alt = "office halls"/>
                <img src = {office} alt = "office"/>
            </div>
        </>
    )
}

export default Office

