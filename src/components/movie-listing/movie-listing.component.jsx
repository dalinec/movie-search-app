import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/moviesSlice';

import Slider from 'react-slick';
import { Settings } from '../../common/settings';

import MovieCard from '../movie-card/movie-card.component';

import './movie-listing.style.scss';

const MovieListing = () => {
  const settings = Settings;
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  let renderMovies,
    renderShows = '';

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
  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='movie-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
