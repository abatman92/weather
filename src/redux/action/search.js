import { cities } from "../../apiInstance";

export const searchCondition = (value) => ({
    type: "searchCondition",
    payload: value
})

export const addToFoundCitiesArray = (item) => ({
    type: "addToFoundCitiesArray",
    payload: item
})

const setIsLoading = (boolean) => ({
    type: "setIsLoading",
    payload: boolean
})

export const fetchCityNames =(value) => async (dispatch) => {
    if (value.length > 2) {
      try {
        dispatch(setIsLoading(true))
        const res = await cities(
          `direct?q=${value}&limit=100&appid=45862d988ee898246d81c466820f362b`
        );
        dispatch(addToFoundCitiesArray(res.data));
        dispatch(setIsLoading(false))
      } catch {
        dispatch(addToFoundCitiesArray([]));
      }
    }
  } 