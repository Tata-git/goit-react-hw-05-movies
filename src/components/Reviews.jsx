import { useFetchReviews } from 'hooks/useFetchReviews';

const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
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
