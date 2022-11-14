import { useEffect, useState} from "react";
import { getTrendingMovie } from "services/api";
import { TrendList } from "components/TrendList/TrendList";

const Home = () => {
	const [trending, setTrending] = useState([])
  
	
	useEffect(() => {
		
		async function getMovie() {
			let response
      try {
        response = await getTrendingMovie();
				if (response.length !== 0) {
					setTrending(response);
				}
      } catch (error) {
				console.log(error);
      } finally {
				console.log(response);
      }
    }
		getMovie();
  }, [ ]);


	return (
		<TrendList movieList = {trending} />
	)		
	}
export default Home;