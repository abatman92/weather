import { faSpinner, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useRef } from "react";
import { searchConditionAction, fetchCityNames } from "../redux/action/search";
import style from "../styles/searchBlock.module.scss"
import { SearchPopup } from "./searchPopup";

export const SearchBlock = memo(({
  getWeather,
  dispatcher,
  isLoading,
  currentText,
  err
}) => {
  const cityName = useRef();
  const inputHandler = () => {
    dispatcher(searchConditionAction(cityName.current.value));
  };
  ;
  useEffect(() => {
    dispatcher(fetchCityNames(currentText));
  }, [currentText]);
  const askForWeather =(value) => {
    getWeather(value);
    dispatcher(searchConditionAction(""));
  };
  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInp}
        name="cityInput"
        type="text"
        ref={cityName}
        value={currentText}
        onChange={inputHandler}
        autoComplete="off"
      />
      {isLoading && <FontAwesomeIcon icon={faSpinner} className="rotation" />}
      {err && <FontAwesomeIcon icon={faTriangleExclamation} color={"#9b1414"} size="sm" />}
     <SearchPopup askForWeather={askForWeather} />
    </div>
  );
});
