import style from "../styles/Office.module.css"

import office from "../assets/office.png"
import officeHalls from "../assets/office_halls.png"

const Office = () => {

    return (
        <>
            <div className = {style.background}>
                <img src = {officeHalls} alt = "office halls"/>
                <img src = {office} alt = "office"/>
            </div>
        </>
    )
}

export default Office

