import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/moviesSlice';

import MovieCard from '../movie-card/movie-card.component';

import './movie-listing.style.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  let renderMovies = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
