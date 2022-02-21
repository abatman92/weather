import { cities } from "../../apiInstance";
import { addToFoundCitiesArray, searchCondition, setIsLoading, setSearchErr } from "../constants";

export const searchConditionAction = (value) => ({
    type: searchCondition,
    payload: value
})

export const addToFoundCitiesArrayAction = (item) => ({
    type: addToFoundCitiesArray,
    payload: item
})

const setIsLoadingAction = (boolean) => ({
    type: setIsLoading,
    payload: boolean
})

export const fetchCityNames =(value) => async (dispatch) => {
    if (value.length > 2) {
      try {
        dispatch(setIsLoadingAction(true))
        const res = await cities(
          `direct?q=${value}&limit=100&appid=45862d988ee898246d81c466820f362b`
        );
        dispatch(addToFoundCitiesArrayAction(res.data));
      } catch (e) {
        dispatch(addToFoundCitiesArrayAction([]));
        dispatch({type: setSearchErr})
      }
      dispatch(setIsLoadingAction(false))
    }
  } 