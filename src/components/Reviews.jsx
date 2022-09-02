import { useFetchReviews } from 'hooks/useFetchReviews';

const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (<p>We don't have any reviews for this movie</p>)}
    </>
  );
};
export default Reviews;
