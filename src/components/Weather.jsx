import Card from "react-bootstrap/Card";
import { useState } from "react";

function Weather (props) {
  const [weatherData, setWeatherData] = useState([{date: 'NA', description: 'NA'}]);

  console.log(props.error);

  if (props.forecast !== weatherData && props.forecast.length > 0) {
    setWeatherData(props.forecast);
  }

  return (
    <>
      {weatherData.map((day, idx) => (
        <Card key={idx} className="weatherCard">
          <Card.Title>{day.date}</Card.Title>
          <Card.Text>{day.description}</Card.Text>
        </Card>
      ))}
    </>
  );
}

export default Weather;