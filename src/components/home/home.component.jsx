import { useEffect } from 'react';
import MovieListing from '../movie-listing/movie-listing.component';
import movieApi from '../../common/apis/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';

  useEffect(() => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Err:', err);
        });
      dispatch(addMovies(res.data));
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
