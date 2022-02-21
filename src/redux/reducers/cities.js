const initialState = { cities: [], isAddigToFavorites: false };

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case "AddCity": {
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    }
    case "RemoveFromFavorite": {
      const newArr = state.cities.filter(
        (item) => item.name !== action.payload
      );
      return {
        ...state,
        cities: newArr,
      };
    }
    case "AddCityToReducer": {
      return {
        ...state,
        cities: action.payload,
      };
    }
    case "setIsAddingToFavorites": {
      return {
        ...state,
        isAddigToFavorites: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
