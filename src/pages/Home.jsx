import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/Box';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getMovie() {
      let response;
      try {
        response = await getTrendingMovies();
        if (response.length !== 0) {
          setTrending(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovie();
  }, []);

  return (
    <Box as="main" px={3} py={4}>
      <h1>Trending today</h1>
      <MovieList movieList={trending} />
    </Box>
  );
};

export default Home;
