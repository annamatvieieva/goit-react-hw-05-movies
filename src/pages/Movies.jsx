import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'services/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/Box';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(searchParams.get('query') ?? '');

  const notify = message => {
    toast.error(message);
  };

  const saveQuery = value => {
    setRequest(value);
    updateQueryString(value);
  };

  useEffect(() => {
    if (request === '') {
      return;
    }
    const fetchMovies = async () => {
      let response;
      try {
        response = await getSearchMovies(request);
        if (response.length !== 0) {
          setData(response);
        } else {
          notify('Sorry, but your search did not return any results.');
        }
      } catch (error) {
        notify(error.message);
      } finally {
      }
    };
    fetchMovies();
  }, [request]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Box as="main" px={3} py={4}>
      <Searchbar onSubmit={saveQuery} />
      <MovieList movieList={data} />
      <ToastContainer />
    </Box>
  );
};

export default Movies;
