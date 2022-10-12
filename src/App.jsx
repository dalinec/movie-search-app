import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './components/home/home.component';
import MovieDetails from './components/movie-details/movie-details.components';
import PageNotFound from './components/page-not-found/page-not-found.component';
import Footer from './components/footer/footer.component';

import './App.style.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
