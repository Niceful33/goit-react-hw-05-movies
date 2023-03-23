import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Navigation from './Navigation/Navigation';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Movies from 'pages/Movies/Movies';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
