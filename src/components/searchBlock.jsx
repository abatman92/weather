import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useRef } from "react";
import { searchCondition, fetchCityNames } from "../redux/action/search";
import style from "../styles/searchBlock.module.scss"
import { SearchPopup } from "./searchPopup";

export const SearchBlock = memo(({
  getWeather,
  dispatcher,
  isLoading,
  currentText
}) => {
  const cityName = useRef();
  const inputHandler = () => {
    dispatcher(searchCondition(cityName.current.value));
  };
  ;
  useEffect(() => {
    dispatcher(fetchCityNames(currentText));
  }, [currentText]);
  const askForWeather =(value) => {
    getWeather(value);
    dispatcher(searchCondition(""));
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
     <SearchPopup askForWeather={askForWeather} />
    </div>
  );
});
