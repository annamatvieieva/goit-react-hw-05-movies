import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "services/api";
import { CastList } from "./CastList/CastList";

const Cast = () => {
	const [cast, setCast] = useState();
	const { movieId } = useParams();

	useEffect(() => {
		async function getCast() {
			let response
      try {
        response = await  getMovieCast(Number(movieId));
				setCast(response);
      } catch (error) {
				console.log(error);
			} finally {
				console.log( 'cast2', response);
      }
		}
		getCast();
	}, [movieId]);


	return (
	<div>
			{cast && <CastList cast={cast} />}
			</div>
	);
}

export default Cast;