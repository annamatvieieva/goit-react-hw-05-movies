import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MovieList = ({ movieList }) => {
	const location = useLocation();

	return (
		<div>
			{movieList.map(({ id, title }) => {
				return (
					<div key={id}>
						<NavLink to={`/movies/${id}`}  state={{ from: location }}>{title}</NavLink>
					</div>);
			})}</div>
	);
}


