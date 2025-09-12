export default function HttpCodeDisplay({codeData}) {
    let styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "20%",
        height: "10%",
        borderRadius: "5px",
        padding: "10px",
    };

    switch (codeData.type) {
        case "Success":
            styles = {
                ...styles,
                backgroundColor: "#d4edda",
                color: "#155724",
            };
            break;
        case "Error":
            styles = {
                ...styles,
                backgroundColor: "#f8d7da",
                color: "#721c24",
            };
            break;
        case "Warning":
            styles = {
                ...styles,
                backgroundColor: "#fff3cd",
                color: "#856404",
            };
            break;
        default:
            styles = {
                ...styles,
                backgroundColor: "#858585",
                color: "#050505",
            };

            codeData.type = "Invalid code type " + codeData.type;
            break;
    }

    return (
        <div style={{
            display: styles.display,
            flexDirection: styles.flexDirection,
            alignItems: styles.alignItems,
            justifyContent: styles.justifyContent,
            borderRadius: styles.borderRadius,
            width: styles.width,
            height: styles.height,
            padding: styles.padding,
            backgroundColor: styles.backgroundColor,
            color: styles.color,
        }}>
            <h2>{codeData.title}</h2>
            <p>{codeData.message}</p>
            <span style={{fontWeight: "bold"}}>{codeData.type}</span>
        </div>
    );
}