import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Weather from "./Weather";

function Map (props) {
  if(props.location[0] !== '') {
    const mapLocation = `https://maps.locationiq.com/v3/staticmap?key=${props.mapKey}&center=${props.location[0]},${props.location[1]}&zoom=13&size=600x400&format=jpg&maptype=streets`;
    return (
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: '600px'}}>
              <Card.Img src={mapLocation}></Card.Img>
              <Card.Title>{props.displayName}</Card.Title>
              <Card.Text>Lattitude: {props.location[0]}</Card.Text>
              <Card.Text>Longitude: {props.location[1]}</Card.Text>
            </Card>
          </Col>

          <Col>
            <h3 className="weatherHeader">Weather</h3>
            <Weather forecast={props.forecast}/>
          </Col>
        </Row>
      </Container>
    );
    }else {
    return (<></>);
  }
}
export default Map;