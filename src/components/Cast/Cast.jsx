import { useEffect, useState } from 'react';
import { getMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import DefaultImg from '../../images/actor-img.png';
import { CastBox, ActorImg } from './Cast.Styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <h2>Cast</h2>
      <CastBox>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <ActorImg
              src={
                actor.profile_path
                  ? BASE_IMG_URL + actor.profile_path
                  : DefaultImg
              }
              alt={actor.original_name}
            />
            <p>{actor.original_name}</p>
          </li>
        ))}
      </CastBox>
    </div>
  );
}
