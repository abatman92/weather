import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan, faSpinner}  from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import style from "../styles/favoriteItem.module.scss"
import { RemoveItemFromFavorite } from "../redux/action/cities";

export const FavoriteItem = ({ getWeather, name, id, dispatch }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const removeFromFavorite = () => {
    setIsRemoving(true)
    dispatch(RemoveItemFromFavorite(name, id));
  }
  return (
    <div className={style.favoriteItem}>
      <p onClick={() => getWeather(name)} key={name}>
        {name}
      </p>
      {!isRemoving ? <button onClick={removeFromFavorite} className={style.removeFavoriteBtn}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button> : <FontAwesomeIcon icon={faSpinner} className="rotation" />}
    </div>
  );
};
