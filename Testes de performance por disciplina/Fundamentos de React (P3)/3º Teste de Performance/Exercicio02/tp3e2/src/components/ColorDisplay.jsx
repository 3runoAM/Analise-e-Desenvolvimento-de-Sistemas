export default function ColorDisplay({color}) {
    return (
        <>
            <div style={{backgroundColor: color, padding: "50px"}}>O hex da vez é: {color}</div>
        </>
    );
}