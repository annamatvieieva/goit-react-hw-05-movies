import { useEffect, useState} from "react";
import { getTrendingMovies } from "services/api";
import { MovieList } from "components/MoviesList/MoviesList";

const Home = () => {
	const [trending, setTrending] = useState([])
  
	
	useEffect(() => {
		
		async function getMovie() {
			let response
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
  }, [ ]);


	return (
		<MovieList movieList = {trending} />
	)		
	}
export default Home;