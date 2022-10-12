import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/moviesSlice';

import MovieListing from '../movie-listing/movie-listing.component';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
