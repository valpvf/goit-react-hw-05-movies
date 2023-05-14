import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';


const MainLayuot = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayuot;
