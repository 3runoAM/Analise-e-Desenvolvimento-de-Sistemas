import {factorReducer} from "../reducers/factorReducer";
import {useReducer} from "react";
import FactorContext from "../contexts/FactorContext";

const FactorContextProvider = ({children}) => {
    const [factors, dispatchFactors] = useReducer(factorReducer, {
        carbInsulinRatio: 10,
        targetGlucose: 100,
    });

    return (
        <>
            <FactorContext.Provider value={{factors, dispatchFactors}}>
                {children}
            </FactorContext.Provider>
        </>
    );
}

export default FactorContextProvider;