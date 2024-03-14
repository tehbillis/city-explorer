import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function Weather (props) {
  const [weatherData, setWeatherData] = useState([{date: 'NA', description: 'NA'}]);

  if (props.forecast !== weatherData && props.forecast.length > 0) {
    setWeatherData(props.forecast);
  }

  return (
    <Row>
      {weatherData.map((day, idx) => (
        <Card key={idx} className="weatherCard">
          <Card.Img variant="left" src={`https://cdn.weatherbit.io/static/img/icons/${day.icon}.png`} height={"120rem"} width={"120rem"} />
          <Card.Title>{day.day}</Card.Title>
          <Card.Text>{day.description}</Card.Text>
        </Card>
      ))}
    </Row>
  );
}

export default Weather;