import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faSpinner}  from '@fortawesome/free-solid-svg-icons'
import { addToFavorites } from "../redux/action/cities";
import weatherItemStyles from "../styles/weatherItem.module.scss"

const tempInC = (value) => Math.round(value-273.15)
const pressureINmmHg = (value) => value * 0.75;
const windDestination = (num) => {
  const val = Math.floor(num / 22.5 + 0.5);
  const arr = [
    "С",
    "ССВ",
    "СВ",
    "ВСВ",
    "В",
    "ВЮВ",
    "ЮВ",
    "ЮЮВ",
    "Ю",
    "ЮЮЗ",
    "ЮЗ",
    "ЗЮЗ",
    "З",
    "ЗСЗ",
    "СЗ",
    "ССЗ",
  ];
  return arr[val % 16];
};


export const WeatherItem = (({name, main, weather, wind, coord, sys, addToFavoritesButtonStatus, isAddigToFavorites, dispatcher}) => {
    
    const addToFav = () => dispatcher(addToFavorites({name, ...coord, country: sys.country}))
    return (
      <div className={weatherItemStyles.weatherItem}>
        <div className={weatherItemStyles.temperature}>{tempInC(main.temp)}&deg;</div>
        <h2 className={weatherItemStyles.cityHeading}>
          {name}
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt=""
          />
        </h2>
        <p>Ощущается как: {tempInC(main.feels_like)}&deg;</p>
        <p>
          Температура от: {tempInC(main.temp_min)}&deg; до:{" "}
          {tempInC(main.temp_max)}&deg;
        </p>
        <p>Давление: {pressureINmmHg(main.pressure)} mm Hg</p>
        <p>{weather[0].description}</p>
        <p>
          Ветер {wind.speed}м/с, {windDestination(wind.deg)}
        </p>
        {!addToFavoritesButtonStatus && (
          <button className={weatherItemStyles.addToFavoritesButton} onClick={addToFav}>
            {isAddigToFavorites ? (
              <FontAwesomeIcon icon={faSpinner} className="rotation" />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}{" "}
            в избранное
          </button>
        )}
      </div>
    );
})