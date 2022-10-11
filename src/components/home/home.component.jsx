import { isFulfilled } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAsyncMovies } from '../../features/movies/moviesSlice';

import MovieListing from '../movie-listing/movie-listing.component';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [isFulfilled]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
