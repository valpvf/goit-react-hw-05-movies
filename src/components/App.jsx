import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePages';
import Movies from '../pages/MoviesPages';
import MovieDetails from '../pages/MovieDetailsPages';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Header from './Header/Header';

const MainLauot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLauot />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
        {/* </Route> */}
      </Routes>
    </>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
