import { backend} from "../../apiInstance"
import { AddCity, AddCityToReducer, RemoveFromFavorite, setAddCityErr, setCitiesErr, setIsAddingToFavorites } from "../constants"

export const AddCityAction = (cityObj) => ({
    type: AddCity,
    payload: cityObj
})

export const RemoveFromFavoriteAction = (value) => ({
    type: RemoveFromFavorite,
    payload: value
})

const AddCityToReducerAction = (arr) => ({
    type: AddCityToReducer,
    payload: arr
})

export const FetchCities = () => async (dispatch) => {
    try {
        const res = await backend.get("cities")
        dispatch(AddCityToReducerAction(res.data))
    } catch {
        dispatch(setCitiesErrType)
    }
}

const setIsAddingToFavoritesAction = (boolean) => ({
    type: setIsAddingToFavorites,
    payload: boolean
})

export const addToFavorites = (item) => async (dispatch) => {
  dispatch(setIsAddingToFavoritesAction(true));
  try {
    const res = await backend.post("cities", item);
    dispatch(AddCityAction(res.data));
  } catch {
    dispatch({type: setAddCityErr})
  }
  dispatch(setIsAddingToFavoritesAction(false));
}

export const RemoveItemFromFavorite = (val, id) => async (dispatch) => {
    try {
      await backend.delete(`cities/${id}`);
      dispatch(RemoveFromFavoriteAction(val));
    } catch {
      dispatch(setCitiesErrType);
    };
  }

const setCitiesErrType = { type: setCitiesErr }

