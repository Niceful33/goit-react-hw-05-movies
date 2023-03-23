import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <Loader /> : <MoviesList movies={movies} />}</div>;
}
