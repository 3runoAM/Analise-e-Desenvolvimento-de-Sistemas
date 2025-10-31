import {createContext} from "react";

const FactorContext = createContext({
    carbInsulinRatio: 10,
    targetGlucose: 100,
});

export default FactorContext;