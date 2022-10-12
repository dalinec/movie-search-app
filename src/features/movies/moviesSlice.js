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
export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowsDetail',
  async (id) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;

    const response = await movieApi.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
    const data = response.data;
    return data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMoveOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMoveOrShow = {};
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
    [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, selectedMoveOrShow: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; //state, name of reducer, propname
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMoveOrShow;
export default movieSlice.reducer;
