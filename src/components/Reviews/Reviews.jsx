import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/api';
import { ReviewList } from './ReviewList/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  const message = "We don't have any reviews for this movie.";

  useEffect(() => {
    async function getReviews() {
      let response;
      try {
        response = await getMovieReviews(Number(movieId));
        if (response.length !== 0) {
          setReviews(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getReviews();
  }, [movieId]);

  return <div>{reviews ? <ReviewList reviews={reviews} /> : message}</div>;
};

export default Reviews;
