import Carousel from "react-bootstrap/Carousel";

function Movie (props) {
  return (
    <Carousel>
        {props.movieData.map((movie, idx) => (
          <Carousel.Item key={idx}>
            <img className="carouselImg" src={movie.backdrop} />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
  );
}

export default Movie;