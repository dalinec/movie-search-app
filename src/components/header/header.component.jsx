import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/moviesSlice';
import user from '../../images/user.png';

import './header.style.scss';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAsyncMovies('Harry'));
    dispatch(fetchAsyncShows('Dog'));
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please enter a search term!');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
    navigate('/');
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={term}
            placeholder='Search Movies or Shows'
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user'></img>
      </div>
    </div>
  );
};

export default Header;
