import Row from "react-bootstrap/Row";
import WeatherDay from "./WeatherDay";
import { useState } from "react";

function Weather (props) {
  const [weatherData, setWeatherData] = useState([{date: 'NA', description: 'NA'}]);

  if (props.forecast !== weatherData && props.forecast.length > 0) {
    setWeatherData(props.forecast);
  }

  return (
    <Row>
      {weatherData.map((day, idx) => (
        <WeatherDay key={idx} icon={day.icon} day={day.day} description={day.description} />
      ))}
    </Row>
  );
}

export default Weather;