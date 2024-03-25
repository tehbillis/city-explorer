import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Weather from "./Weather";
import Movies from "./Movies";
import Map from "./Map";

function City (props) {
  if(props.location[0] !== '') {
    const mapLocation = `https://maps.locationiq.com/v3/staticmap?key=${props.mapKey}&center=${props.location[0]},${props.location[1]}&zoom=13&size=600x400&format=jpg&maptype=streets`;
    return (
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Map mapLocation={mapLocation} displayName={props.displayName} location={props.location} />
          </Col>

          <Col>
            <Weather forecast={props.forecast}/>
            <Movies movies={props.movies}/>
          </Col>
        </Row>
      </Container>
    );
    }else {
    return (<></>);
  }
}
export default City;