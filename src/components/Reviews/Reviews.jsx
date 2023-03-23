import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import { ReviewsItem, TitleReview, AuthorReview } from './Reviews.Styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <div>
      <TitleReview>Reviews</TitleReview>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <ReviewsItem key={review.id}>
                <AuthorReview>{review.author}</AuthorReview>
                <p>{review.content}</p>
              </ReviewsItem>
            );
          })}
        </ul>
      ) : (
        <p>Reviews not a found! Sorry 😕</p>
      )}
    </div>
  );
}
