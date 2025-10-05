import office from "../../assets/Office.png";

const OfficeBG = () => (
    <img
        src={office}
        alt="office-background-image"
        style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // keeps full image visible
            objectPosition: "center",
            display: "block",
        }}
    />
);

export default OfficeBG;
