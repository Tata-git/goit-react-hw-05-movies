import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <h1>
      Content not found. Go to <Link to="/">home page.</Link>
    </h1>
  );
};
