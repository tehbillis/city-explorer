import Card from "react-bootstrap/Card";

function Map (props) {
  return (
    <Card style={{ width: '600px'}}>
      <Card.Img src={props.mapLocation}></Card.Img>
      <Card.Title>{props.displayName}</Card.Title>
      <Card.Text>Lattitude: {props.location[0]}</Card.Text>
      <Card.Text>Longitude: {props.location[1]}</Card.Text>
    </Card>
  );
}

export default Map;