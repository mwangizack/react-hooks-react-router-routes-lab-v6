import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({title: '', time: 0, genres: [] })
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(response => response.json())
    .then(data => setMovie(data))
  }, [movieId])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map((genre, index) => <span key={index}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
