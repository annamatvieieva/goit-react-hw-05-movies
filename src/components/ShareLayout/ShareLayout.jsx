import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, NavigationElement, Navigation } from './ShareLayout.styled';

const ShareLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavigationElement to="/">Home</NavigationElement>
          <NavigationElement to="movies">Movies</NavigationElement>
        </Navigation>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ShareLayout;
