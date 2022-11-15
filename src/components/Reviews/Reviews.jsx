import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "services/api";
import { ReviewList } from "./ReviewList/ReviewList";

const Reviews = () => {
	const [reviews, setReviews] = useState();
	const { movieId } = useParams();

	useEffect(() => {
		async function getReviews() {
			let response
      try {
        response = await  getMovieReviews(Number(movieId));
				setReviews(response);
      } catch (error) {
				console.log(error);
			} finally {
				console.log( 'reviews', response);
      }
		}
		getReviews();
	}, [movieId]);


	return (
	<div>
			{reviews && (<ReviewList reviews={reviews} />)}
			</div>
	);
}

export default Reviews;
