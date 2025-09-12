import './App.css';
import HttpCodeDisplay from "./components/HttpCodeDisplay";

export default function App() {
    const httpCodesData = [
        {
            title: "200 OK",
            message: "The request has succeeded",
            type: "Success"
        },
        {
            title: "404 Not Found",
            message: "The server can not find the solicited resource",
            type: "Error"
        },
        {
            title: "429 Too Many Requests",
            message: "The user has sent too many requests",
            type: "Warning"
        },
        {
            title: "500 Internal Server Error",
            message: "The server has encountered an unexpected condition",
            type: "Errr"
        }
    ];

    return (
        <>
            {httpCodesData.map((codeData) => {
                return <HttpCodeDisplay codeData={codeData}></HttpCodeDisplay>
            })}
        </>
    );
}