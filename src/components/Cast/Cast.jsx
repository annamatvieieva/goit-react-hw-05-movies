import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/api';
import { CastList } from './CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  const message = "We don't have any information about the cast of this movie.";

  useEffect(() => {
    async function getCast() {
      let response;
      try {
        response = await getMovieCast(Number(movieId));
        if (response.length !== 0) {
          setCast(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getCast();
  }, [movieId]);

  return <div>{cast ? <CastList cast={cast} /> : message}</div>;
};

export default Cast;
