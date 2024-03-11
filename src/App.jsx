import Header from './components/Header';
import CitySearch from './components/CitySearch';
import Footer from './components/Footer';
import City from './components/City';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({display_name: ''});
  const [searchQuery, setSearchQuery] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weather, setWeather] = useState([]);
  const [showError, setShowError] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function getLocation() {
    setShowError(false);

    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

    const response = await axios.get(API).catch(function (error) {
      if (error.response) {

    console.error(error);
        setLat('');
        setLon('');
        setLocation({ display_name: '' });
        setWeather([]);
        
        setErrorMessage(error.response.data.error);
        setErrorCode(error.response.status);

        setShowError(true);
      }
    });

    // Let's set the various state variables
    setLat(response.data[0].lat);
    setLon(response.data[0].lon);

    setLocation(response.data[0]);

    // Go and get the weather for the location
    getWeather(response.data[0]);
  }

  async function getWeather(data) {
    const displayName = data.display_name ? data.display_name.split(',')[0].trim() : '';
    const weatherAPI = `http://localhost:3939/weather?lat=${encodeURIComponent(data.lat)}&lon=${encodeURIComponent(data.lon)}&searchQuery=${encodeURIComponent(displayName)}`;

    try {
      const response = await axios.get(weatherAPI);
      // Handle the successful response here
      setWeather(response.data);
    } catch (error) {
      // Handle the error here
      if (error.response) {
        setErrorMessage(error.response.data);
        setErrorCode(error.response.status);
        setShowError(true);
      }
    }
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }

  function queryLocation(event) {
    event.preventDefault();
    event.stopPropagation();

    // Request Location from API and handle the returned data.
    getLocation();
  }

  return (
    <>
    <Header />
    <main>
      <CitySearch onChange={updateQuery} onSubmit={queryLocation} location={location.displayName} />

      <Error showError={showError} errorCode={errorCode} errorMessage={errorMessage} />
      
      <City location={[lat, lon]} mapKey={API_KEY} displayName={location.display_name} forecast={weather}/>
    </main>
    <Footer />
    </>
  );
}

export default App;