import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.error(error))
  }, [])

  const moviesToDisplay = movies.map(movie => {
    return <li><MovieCard key={movie.id} movie={movie}/></li>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {moviesToDisplay}
        </ul>
      </main>
    </>
  );
};

export default Home;
