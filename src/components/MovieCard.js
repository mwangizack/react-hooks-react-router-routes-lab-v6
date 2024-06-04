import {Link} from 'react-router-dom';

function MovieCard({movie}) {

  return (
    <article>
        <h2>{movie.title}</h2>
        <Link to={`/movie/${movie.id}`}>Learn more</Link>
    </article>
  );
};

export default MovieCard;