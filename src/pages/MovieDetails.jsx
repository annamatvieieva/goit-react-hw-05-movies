import { Suspense, useState, useEffect } from "react";
import { NavLink, Outlet, useParams, useLocation  } from "react-router-dom";
import MovieCard from "components/MovieCard/MovieCard";
import { getMovieById } from "services/api";




const MovieDetails = () => {
	const [movie, setMovie] = useState();

	const location = useLocation();
	const backLink = location.state?.from ?? '/';
	const {movieId} = useParams();

	useEffect(() => {
		async function getMovie() {
			let response
      try {
        response = await  getMovieById(Number(movieId));
					setMovie(response);	
      } catch (error) {
				console.log(error);
			} finally {
				console.log(response);
      }
    }
		getMovie();
	}, [movieId]);
	
	console.log(movie);
	return (<div>
		<NavLink to={backLink}>Go back</NavLink>
		{movie && <MovieCard movieInformation={movie}/>}
		<div>
			<div>
				<p>Additional information</p>
				<ul>
					<li><NavLink to='cast'>Cast</NavLink></li>
					<li><NavLink to='reviews'>Reviews</NavLink></li>
				</ul>
			</div>
			<Suspense>
				<Outlet />
			</Suspense>
			</div>
</div>
	);
}

export default MovieDetails;