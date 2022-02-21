const initialState = {
    weatherResult: {},
    isRecieving: false
}

export const results = (state = initialState, action) => {
    switch (action.type) {
        case "AddResult": {
            return {
              ...state,
              weatherResult: action.payload,
            };
        }
        case "SetIsRecieving": {
            return {
              ...state,
              isRecieving: action.payload,
            };
        }
        default: {
          return state
        }
    }
}