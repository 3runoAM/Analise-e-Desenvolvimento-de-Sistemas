import {useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState} from "react";
import {factorReducer} from "../reducers/factorReducer";
import FactorContext from "../contexts/FactorContext";
import DisplayFactors from "./DisplayFactors";

export default function PainelGlicemico() {
    const ISF = 50;
    const [currentGlucose, setCurrentGlucose] = useState(120);
    const [mealCarbs, setMealCarbs] = useState(50);

    const {factors, dispatchFactors} = useContext(FactorContext);

    const mealBolus = useMemo(() => {
        return mealCarbs / factors.carbInsulinRatio;
    }, [mealCarbs, factors.carbInsulinRatio]);

    const correctionBolus = useMemo(() => {
        const dose = (currentGlucose - factors.targetGlucose) / ISF;
        return dose < 0 ? 0 : dose;
    }, [currentGlucose, factors.targetGlucose, ISF]);

    const totalBolus = useMemo(() => {
        return mealBolus + correctionBolus;
    }, [mealBolus, correctionBolus]);

    const totalBolusCard = useRef();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "currentGlucose":
                setCurrentGlucose(Number(value));
                break;
            case "mealCarbs":
                setMealCarbs(Number(value));
                break;
            default:
                break;
        }
    };

    const handleQuickChange = () => {
        dispatchFactors({type: "SET_CARB_RATIO", payload: 8});
        dispatchFactors({type: "SET_TARGET_GLUCOSE", payload: 110});
    };

    useEffect(() => {
        console.log(`[Monitoramento] Glicemia alterada para: ${currentGlucose} mg/dL.`)

        if (currentGlucose < 70) console.log("ALERTA: Hipoglicemia. Favor consumir carboidratos!");
    }, [currentGlucose]);

    useLayoutEffect(() => {
        console.log("TOTAL BOLUS É MAIOR QUE 15?");
        console.log(totalBolus);

        if(totalBolus > 15) {
            totalBolusCard.current.style.borderStyle = "solid";
            totalBolusCard.current.style.borderColor = "#D30808FF";
            totalBolusCard.current.style.borderWidth = "5px";
        } else {
            totalBolusCard.current.style.borderStyle = "none";
            totalBolusCard.current.style.borderColor = "initial";
            totalBolusCard.current.style.borderWidth = "initial";
        };
    }, [totalBolus]);


    return (
        <section>
            <h1>Painel Glicêmico</h1>

            <div>
                <h2>Fatores Glicêmicos Atuais</h2>
                <dl>
                    <dt>Glicemia Atual (mg/dL):</dt>
                    <dd>{currentGlucose}</dd>

                    <dt>Carboidratos da Refeição (g):</dt>
                    <dd>{mealCarbs}</dd>
                </dl>
                <div>
                    <DisplayFactors/>
                </div>
            </div>

            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Atualizar Fatores Glicêmicos</h2>
                    <div>
                        <label> Glicemia Atual (mg/dL)</label>
                        <input
                            type="number"
                            name="currentGlucose"
                            value={currentGlucose}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div>
                        <label> Carboidratos da Refeição (g): </label>
                        <input
                            type="number"
                            name="mealCarbs"
                            value={mealCarbs}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </form>


                <div>
                    <button onClick={() => handleQuickChange()}>Ajuste rápido</button>
                </div>


                <div ref={totalBolusCard}>
                    <h2>Dose(s) de Insulina</h2>
                    <p>Bolus para a refeição: {mealBolus.toFixed(2)} U</p>
                    {
                        (currentGlucose > factors.targetGlucose) && (
                            <p>Bolus de Correção: {correctionBolus.toFixed(2)} U</p>)
                    }
                    <p>Dose Total: {totalBolus.toFixed(2)} U</p>
                </div>
            </div>
        </section>
    );
}