import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Harry';
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;

    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${movieText}&type=movie`
    );
    const data = response.data;
    return data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'Friends';
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;

    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${seriesText}&type=series`
    );
    const data = response.data;
    return data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; //state, name of reducer, propname
export const getAllShows = (state) => state.movies.shows; //state, name of reducer, propname
export default movieSlice.reducer;
