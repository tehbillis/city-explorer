import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function CitySearch (props) {
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={props.onSubmit}>
            <InputGroup>
              <Form.Control placeholder="Search For A City" aria-label="Search For A City" aria-describedby="city-search-button" onChange={props.onChange} />
              <Button variant="outline-secondary" id="city-search-button" type="submit">Search</Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CitySearch;