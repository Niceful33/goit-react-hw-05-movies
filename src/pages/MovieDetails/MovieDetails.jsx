import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { getMovieDetailsById } from '../../services/api';
import defaultImg from '../../images/movie-img.jpg';
import {
  Details,
  InfoFilm,
  MoreInfoFilm,
  MoreLink,
  ButtonBack,
} from './MovieDetails.Styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMovieDetailsById(id).then(setMovie);
  }, [id]);
  if (!movie) {
    return <p>Loading...</p>;
  }

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  const yearRelease = movie.release_date.split('-')[0];

  const rating = movie.vote_average.toFixed(1);
  return (
    <>
      <ButtonBack type="button" onClick={handleGoBack}>
        Go back
      </ButtonBack>
      <Details>
        <img
          src={
            movie.poster_path ? BASE_IMG_URL + movie.poster_path : defaultImg
          }
          alt={movie.title}
        />
        <InfoFilm>
          <h1>
            {movie.title}({yearRelease})
          </h1>
          <p>User score: {rating}</p>
          <p>{movie.overview}</p>
        </InfoFilm>
      </Details>
      <MoreInfoFilm>
        <MoreLink state={{ from: location?.state?.from ?? '/' }} to="cast">
          Cast
        </MoreLink>
        <MoreLink state={{ from: location?.state?.from ?? '/' }} to="reviews">
          Reviews
        </MoreLink>
      </MoreInfoFilm>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
