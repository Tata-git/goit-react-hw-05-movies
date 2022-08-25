import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <h1>
      Content not found. Go to <Link to="/">home page.</Link>
    </h1>
  );
};
export default NotFoundView;
