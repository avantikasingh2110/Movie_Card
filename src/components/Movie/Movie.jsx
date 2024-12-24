import styles from './Movie.module.css';
import Card from '../Card/Card';
import Data from '../../Data';

const Movie = () => {
  return (
    <div className={styles.movie_container}>
      {Data.map((movie, index) => (
        <Card 
        key={index}
        title={movie.title}
        poster={movie.poster}
        releaseYear={movie.releaseYear}
        genre={movie.genre}
        director={movie.director}
        imdbRating={movie.imdbRating}
        bgp={movie.bgp}
        description={movie.description}
     />
     ))}
    </div>
  );
}

export default Movie;