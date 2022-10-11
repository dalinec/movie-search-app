import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/moviesSlice';

import MovieListing from '../movie-listing/movie-listing.component';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
