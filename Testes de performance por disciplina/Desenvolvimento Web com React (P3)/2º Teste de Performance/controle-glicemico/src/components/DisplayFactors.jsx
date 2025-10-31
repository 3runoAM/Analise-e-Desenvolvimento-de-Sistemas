import {useContext} from "react";
import FactorContext from "../contexts/FactorContext";

export default function DisplayFactors() {
    const { factors } = useContext(FactorContext);

    return (
        <div>
            <dl>
                <dt>Fator de Carboidrato por Insulina (g/U):</dt>
                <dd>{factors.carbInsulinRatio}</dd>

                <dt>Glicemia Alvo (mg/dL):</dt>
                <dd>{factors.targetGlucose}</dd>
            </dl>
        </div>
    );
}