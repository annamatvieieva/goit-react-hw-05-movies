import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import ShareLayout from "./ShareLayout/ShareLayout";

const Home = lazy(() => (import('../pages/Home')));
const MovieDetails = lazy(() => (import('../pages/MovieDetails')));
const Movie = lazy(() => (import('../pages/Movies')));
const Cast = lazy(() => (import('./Cast/Cast')));
const Reviews = lazy(() => (import('./Reviews/Reviews')));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ShareLayout />}>
        <Route index element={<Home/>} />
        <Route path='movies' element={<Movie />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews/>} />
          </Route>
          </Route>
      </Routes>
    </div>
  );
};
