import { weather } from "../../apiInstance"

const setWeatherItems = (item) => ({
    type: "AddResult",
    payload: item
})

const SetIsRecieving = (boolean) => ({
    type: "SetIsRecieving",
    payload: boolean
}) 

export const addResult = (name) => async (dispatch) => {
    dispatch(SetIsRecieving(true))
    const res = await weather(
      `/2.5/weather?q=${name.toLowerCase()}&appid=45862d988ee898246d81c466820f362b`
    );
    dispatch(setWeatherItems(res.data))
    dispatch(SetIsRecieving(false))
}