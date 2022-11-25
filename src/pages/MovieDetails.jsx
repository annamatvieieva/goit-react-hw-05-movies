import { Suspense, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { getMovieById } from 'services/api';
import { Box } from 'components/Box';
import { MoreMovieInfo } from 'components/MoreMovieInfo/MoreMovieInfo';
import { Buttonback } from 'components/ButtonBack/ButtonBack';
import { ReactComponent as ButtonIcon } from '../icons/circle-left.svg';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      let response;
      try {
        response = await getMovieById(Number(movieId));
        setMovie(response);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <Box as="main" py={4}>
      <Buttonback link={backLink}>
        <ButtonIcon />
      </Buttonback>
      {movie && <MovieCard movieInformation={movie} />}
      <MoreMovieInfo link={{ from: location.state.from }} />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
