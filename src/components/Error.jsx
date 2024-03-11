
import Alert from 'react-bootstrap/Alert';

function Error (props) {

  return (
    <Alert variant="danger" show={props.showError}>
        <Alert.Heading>Error Code: {props.errorCode}</Alert.Heading>
        <p>{props.errorMessage}</p>
    </Alert>
  );

}

export default Error;