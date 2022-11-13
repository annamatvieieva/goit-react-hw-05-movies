import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieDetails = () => {
	return (
		<div>
			<ul>
				<NavLink to='cast'>Cast</NavLink>
				<NavLink to='reviews'>Reviews</NavLink>
			</ul>	
			<Suspense>
				<Outlet />
			</Suspense>
</div>
	);
}

export default MovieDetails;