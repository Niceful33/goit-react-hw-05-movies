import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  SearchBar,
  SesrchForm,
  SearchFormButton,
  SearchFormInput,
} from './Movies.Styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const [value, setValue] = useState(query ?? '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    getMovieByQuery(query)
      .then(movies => {
        if (movies.length === 0) {
          alert('Nothing found for your request');
        }
        return setMovies(movies);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setParams({ query: e.target.query.value });
    e.target.reset();
  };

  return (
    <SearchBar>
      <SesrchForm onSubmit={handleSubmit}>
        <SearchFormInput
          placeholder="Search films"
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          name="query"
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SesrchForm>
      {loading ? <Loader /> : <MoviesList movies={movies} />}
    </SearchBar>
  );
}
