import { weather } from "../../apiInstance"
import { AddResult, SetIsRecieving, setResultsErr } from "../constants"

const setWeatherItems = (item) => ({
    type: AddResult,
    payload: item
})

const SetIsRecievingAction = (boolean) => ({
    type: SetIsRecieving,
    payload: boolean
}) 

export const addResultAction = (name) => async (dispatch) => {
    dispatch(SetIsRecievingAction(true))
    try {
        const res = await weather(
          `/2.5/weather?q=${name.toLowerCase()}&appid=45862d988ee898246d81c466820f362b`
        );
    dispatch(setWeatherItems(res.data))
    } catch (e) {
        dispatch({type: setResultsErr})
        dispatch(setWeatherItems({}))
    }
    dispatch(SetIsRecievingAction(false))
}