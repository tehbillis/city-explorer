import Card from "react-bootstrap/Card";

function WeatherDay (props) {
  return (
    <Card className="weatherCard">
      <Card.Img variant="left" src={`https://cdn.weatherbit.io/static/img/icons/${props.icon}.png`} height={"120rem"} width={"120rem"} />
      <Card.Title>{props.day}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card>
  );
}

export default WeatherDay;