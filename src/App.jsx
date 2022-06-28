import { useDispatch, useSelector } from 'react-redux';
import { addResultAction } from './redux/action/results';
import { useEffect } from 'react';
import { FetchCities } from './redux/action/cities';
import { faSpinner, faTriangleExclamation }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles//App.scss";
import { FavoriteItem, SearchBlock, WeatherItem } from './components';
import rotationModule from "./styles/rotation.module.scss"

function App() {
  const dispatcher = useDispatch()
  const { cities, isAddigToFavorites, citiesErr, addErr } = useSelector(({cities}) => cities)
  const { weatherResult, isRecieving, resultsErr } = useSelector(({ results }) => results);
  const { isLoading, currentText, searchErr } = useSelector(({search}) => search)
  const getWeather = (name) => dispatcher(addResultAction(name))
  const favoriteCities = cities.map(item => <FavoriteItem key={item.name} getWeather={getWeather} name={item.name} id={item.id} dispatch={dispatcher} />)
  const checkForObjectInCities = (value) => {
    return cities.some(item => item.name.toLowerCase() === value.toLowerCase())
  }
  useEffect(() => {
    dispatcher(FetchCities())
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2 htmlFor="cityInput">Выбрать город</h2>
        <SearchBlock
          getWeather={getWeather}
          dispatcher={dispatcher}
          isLoading={isLoading}
          currentText={currentText}
          err={searchErr}
        />
        <h2 className="favoritesHeading">Избранное:</h2>
        {!citiesErr && favoriteCities}
        {citiesErr && (
          <>
            <FontAwesomeIcon icon={faTriangleExclamation} color={"#9b1414"} size="sm" /> Что-то пошло не
            так...<br/>Не удалось получить список избранных городов
          </>
        )}
      </header>
      <div className="weatherContainer">
        <div>
          {weatherResult.name && !isRecieving && (
            <WeatherItem
              addToFavoritesButtonStatus={checkForObjectInCities(
                weatherResult.name
              )}
              dispatcher={dispatcher}
              isAddigToFavorites={isAddigToFavorites}
              err={addErr}
              {...weatherResult}
            />
          )}
          {isRecieving && (
            <FontAwesomeIcon
              icon={faSpinner}
              size="6x"
              color="white"
              className={rotationModule.rotation}
            />
          )}
          {resultsErr && <><FontAwesomeIcon icon={faTriangleExclamation} color={"#9b1414"} size="6x" /> Не удалось получить данные о погоде</>}
        </div>
      </div>
    </div>
  );
}

export default App;
