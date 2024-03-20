import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

function Movies (props) {
  const [movieData, setMovieData] = useState([{title: 'NA', overview: 'NA', poster: null, backdrop: null }]);

  if (props.movies !== movieData && props.movies.length > 0) {
    setMovieData(props.movies);
  }

  return (
    <Row>
      <Carousel>
        {movieData.map((movie, idx) => (
          <Carousel.Item key={idx}>
            <img className="carouselImg" src={movie.backdrop} />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>
  );
}

export default Movies;