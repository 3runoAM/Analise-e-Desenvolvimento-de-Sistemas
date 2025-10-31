export const factorReducer = (state, action) => {
    switch (action.type) {
        case "SET_CARB_RATIO":
            return { ...state, carbInsulinRatio: action.payload };
        case "SET_TARGET_GLUCOSE":
            return { ...state, targetGlucose: action.payload };
        default:
            return state;
    }
}