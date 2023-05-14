import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const MainLayuot = lazy(() => import('./MainLayuot/MainLayuot'));
const Home = lazy(() => import('../pages/HomePages'));
const Movies = lazy(() => import('../pages/MoviesPages'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPages'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<MainLayuot />}>
            <Route index element={<Home />} />
            <Route path=":movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
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
