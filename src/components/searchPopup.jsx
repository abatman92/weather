import classNames from "classnames";
import { memo } from "react";
import { useSelector } from "react-redux";
import searchPopupstyles from "../styles/sPopup.module.scss"

export const SearchPopup = memo(({askForWeather}) => {
    const { foundCitiesArray, currentText } = useSelector(({search}) => search)
    const cities = foundCitiesArray.map((item, i) => (
        <li
          onClick={() => askForWeather(item.name)}
          key={item.name + "_" + item.state + "_" + i}
        >
          {item.name}, {item.state}, {item.country}
        </li>
      ))
    return (
      <ul
        className={classNames([searchPopupstyles.searchPopup], {
            [searchPopupstyles.searchPopupActive]: currentText.length > 0,
        })}
      >
          {cities}
      </ul>
    );
})