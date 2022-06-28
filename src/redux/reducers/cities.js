import { AddCity, AddCityToReducer, RemoveFromFavorite, setAddCityErr, setCitiesErr, setIsAddingToFavorites } from "../constants";

const initialState = { cities: [], isAddigToFavorites: false, citiesErr: false, addErr: false };

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case AddCity: {
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    }
    case RemoveFromFavorite: {
      const newArr = state.cities.filter(
        (item) => item.name !== action.payload
      );
      return {
        ...state,
        cities: newArr,
      };
    }
    case AddCityToReducer: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    case setIsAddingToFavorites: {
      return {
        ...state,
        isAddigToFavorites: action.payload,
      };
    }
    case setCitiesErr: {
      return {
        ...state,
        citiesErr: true
      }
    }
    case setAddCityErr: {
      return {
        ...state,
        addErr: true
      }
    }
    default: {
      return state;
    }
  }
};
