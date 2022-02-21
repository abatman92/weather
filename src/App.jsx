import { useDispatch, useSelector } from 'react-redux';
import { addResult } from './redux/action/results';
import { useEffect } from 'react';
import { FetchCities } from './redux/action/cities';
import { faSpinner}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles//App.scss";
import { FavoriteItem, SearchBlock, WeatherItem } from './components';

function App() {
  const dispatcher = useDispatch()
  const {cities, isAddigToFavorites} = useSelector(({cities}) => cities)
  const { weatherResult, isRecieving } = useSelector(({ results }) => results);
  const { isLoading, currentText } = useSelector(({search}) => search)
  const getWeather = (name) => dispatcher(addResult(name))
  const favoriteCities = cities.map(item => <FavoriteItem key={item.name} getWeather={getWeather} name={item.name} id={item.id} dispatch={dispatcher} />)
  const checkForObjectInCities = (value) => {
    return cities.some(item => item.name.toLowerCase() === value.toLowerCase())
  }
  useEffect(() => {
    dispatcher(FetchCities())
  }, []);
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h2 htmlFor="cityInput">Выбрать город</h2>
        <SearchBlock
          getWeather={getWeather}
          dispatcher={dispatcher}
          isLoading={isLoading}
          currentText={currentText}
        />
        <h2 className='favoritesHeading'>Избранное:</h2>
        {favoriteCities}
      </header>
      <div className='weatherContainer'>
        <div>
          {weatherResult.name && !isRecieving && (
            <WeatherItem
              addToFavoritesButtonStatus={checkForObjectInCities(
                weatherResult.name
              )}
              dispatcher={dispatcher}
              isAddigToFavorites={isAddigToFavorites}
              {...weatherResult}
            />
          )}
          {isRecieving && <FontAwesomeIcon icon={faSpinner} size="6x" color='white' className="rotation" />}
        </div>
      </div>
    </div>
  );
}

export default App;
