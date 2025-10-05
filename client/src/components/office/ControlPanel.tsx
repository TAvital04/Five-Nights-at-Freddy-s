const ControlPanel = () => (
    <>
        <button
            style={{
                position: "absolute",
                top: "12%",
                left: "15%",
                transform: "translate(-50%, -50%)",
                width: "5vw", // scales with screen width
                height: "5vw", // stays proportional
                minWidth: "40px", // prevents buttons from getting too small
                minHeight: "40px",
                borderRadius: "50%",
                background: "#fff8",
                border: "2px solid white",
                cursor: "pointer",
            }}
        >
            A
        </button>

        <button
            style={{
                position: "absolute",
                top: "12%",
                right: "15%",
                transform: "translate(50%, -50%)",
                width: "5vw",
                height: "5vw",
                minWidth: "40px",
                minHeight: "40px",
                borderRadius: "50%",
                background: "#fff8",
                border: "2px solid white",
                cursor: "pointer",
            }}
        >
            B
        </button>
    </>
);

export default ControlPanel;
