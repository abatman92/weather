import { AddResult, SetIsRecieving, setResultsErr } from "../constants";

const initialState = {
    weatherResult: {},
    isRecieving: false,
    resultsErr: false
}

export const results = (state = initialState, action) => {
    switch (action.type) {
        case AddResult: {
            return {
              ...state,
              weatherResult: action.payload,
            };
        }
        case SetIsRecieving: {
            return {
              ...state,
              isRecieving: action.payload,
            };
        }
        case setResultsErr: {
          return {
            ...state,
            resultsErr: true,
          };
        }
        default: {
          return state
        }
    }
}