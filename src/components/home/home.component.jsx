import { useEffect } from 'react';
import MovieListing from '../movie-listing/movie-listing.component';
import movieApi from '../../common/apis/movieApi';

const Home = () => {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Err:', err);
        });
      console.log('The response from the API', res);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
