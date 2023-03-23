import { useLocation } from 'react-router-dom';
import defaultImg from '../../images/movie-img.jpg';
import { MovieItem, ItemLink, List, MovieTitle } from './MovieList.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <ItemLink state={{ from: location }} to={`/movies/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? BASE_IMG_URL + movie.poster_path
                  : defaultImg
              }
              alt={movie.title ?? movie.name}
            />
            <MovieTitle>{movie.title ?? movie.name}</MovieTitle>
          </ItemLink>
        </MovieItem>
      ))}
    </List>
  );
}
