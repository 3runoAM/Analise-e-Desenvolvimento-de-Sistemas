function App() {
    const [hexColor, setHexColor] = React.useState("#7a31e8")

    function handleChangeTheme(themeColor) {
        console.log("Hex selecionado: ", themeColor)
        setHexColor(themeColor);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
            <input value={hexColor}
                   onChange={(e) => handleChangeTheme(e.target.value)} type="color"/>

            <div style={{display: "flex"}}>
                <ButtonTheme buttonName="Verde" themeColor="#4cbb17" handleChangeTheme={handleChangeTheme}/>
                <ButtonTheme buttonName="Azul" themeColor="#add8e6" handleChangeTheme={handleChangeTheme}/>
                <ButtonTheme buttonName="Vermelho" themeColor="#ff0000" handleChangeTheme={handleChangeTheme}/>
            </div>
        </div>
    );
}

function ButtonTheme({buttonName, themeColor, handleChangeTheme}) {
    return (
        /*
         É necessário utilizar a arrow function no onClick, e em outros manipuladores de evento em React, por que
         estes esperam uma referência a uma função, ou seja, um código a ser executado quando o evento for disparado. Se
         passassemos a função diretamente, sem o auxílio da arrow function como em: onClick={handleChangeTheme(themeColor)}, o
         JS entenderia que precisamos do valor de retorno da função e a executaria assim que o componente fosse montado
         */

        <button onClick={() => handleChangeTheme(themeColor)}>
            {buttonName}
        </button>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App/>
);