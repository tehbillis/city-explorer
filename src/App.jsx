import Header from './components/Header';
import CitySearch from './components/CitySearch';
import Footer from './components/Footer';
import City from './components/City';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({display_name: ''});
  const [searchQuery, setSearchQuery] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function getLocation() {
    setShowError(false);
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

    const response = await axios.get(API).catch(function (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
        setErrorCode(error.response.status);

        setShowError(true);
      }
    });

    setLat(response.data[0].lat);
    setLon(response.data[0].lon);

    setLocation(response.data[0]);
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }

  function queryLocation(event) {
    event.preventDefault();
    event.stopPropagation();
    // TODO: Request Location from API and handle the returned data.

    getLocation();
  }

  return (
    <>
    <Header />
    <main>
      <CitySearch onChange={updateQuery} onSubmit={queryLocation} location={location.displayName} />

      <Alert variant="danger" show={showError}>
        <Alert.Heading>Error Code: {errorCode}</Alert.Heading>
        <p>{errorMessage}</p>
      </Alert>
      
      <City location={[lat, lon]} mapKey={API_KEY} displayName={location.display_name}/>
    </main>
    <Footer />
    </>
  );
}

export default App;