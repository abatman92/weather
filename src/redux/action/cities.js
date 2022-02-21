import { backend} from "../../apiInstance"

export const AddCity = (cityObj) => ({
    type: "AddCity",
    payload: cityObj
})

export const RemoveFromFavorite = (value) => ({
    type: "RemoveFromFavorite",
    payload: value
})

const AddCityToReducer = (arr) => ({
    type: "AddCityToReducer",
    payload: arr
})

export const FetchCities = () => async (dispatch) => {
    const res = await backend.get("cities")
    dispatch(AddCityToReducer(res.data))
}

const setIsAddingToFavorites = (boolean) => ({
    type: "setIsAddingToFavorites",
    payload: boolean
})

export const addToFavorites = (item) => async (dispatch) => {
  dispatch(setIsAddingToFavorites(true));
  const res = await backend.post(
    "cities",
    item
  );
  dispatch(AddCity(res.data));
  dispatch(setIsAddingToFavorites(false));
}

export const RemoveItemFromFavorite = (val, id) => async (dispatch) => {
    await backend.delete(`cities/${id}`)
    dispatch(RemoveFromFavorite(val));
  }