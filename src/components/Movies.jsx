import Row from "react-bootstrap/Row";
import Movie from "./Movie";
import { useState } from "react";

function Movies (props) {
  const [movieData, setMovieData] = useState([{title: 'NA', overview: 'NA', poster: null, backdrop: null }]);

  if (props.movies !== movieData && props.movies.length > 0) {
    setMovieData(props.movies);
  }

  return (
    <Row>
      <Movie movieData={movieData} />
    </Row>
  );
}

export default Movies;