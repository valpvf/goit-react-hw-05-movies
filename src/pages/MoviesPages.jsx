import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <Outlet />
      <h1>Movies</h1>
    </>
  );
};

export default Movies;
