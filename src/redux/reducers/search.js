const initialState = {currentText: "", foundCitiesArray: [], isLoading: false}

export const search = (state=initialState, action) => {
    switch (action.type) {
        case "searchCondition": {
            return {...state, 
            currentText: action.payload}
        }
        case "addToFoundCitiesArray": {
            return {...state,
            foundCitiesArray: action.payload}
        }
        case "setIsLoading": {
            return {
                ...state, isLoading: action.payload
            }
        }
        default: {
            return state
        }
    }
}