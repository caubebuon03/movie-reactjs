import { createSlice } from "@reduxjs/toolkit";
import { MovieDetailState } from "../services/MediaType.model";

const initialMovieDetailState: MovieDetailState = {
  isShow: false,
  movieDetail: {
      id: "",
      title: "",
      release_date: "",
      poster: "",
      banner: "",
      video: "",
      vote: 0,
      overview: "",
      isTrending: true,
      price: 0,
      time: 0,
      actors: [], 
      category: [],
  }
};

const movieDetailSlice = createSlice({
  name: "detail",
  initialState: initialMovieDetailState,
  reducers: {
    setMovieDetail: (state, action) => {
      state.movieDetail = {...action.payload};
    },
    setActors: (state, action) => {
      state.actors = action.payload;
    },
    setShow: (state, action) => {
      state.isShow = action.payload;
    },
  },
});

export const movieDetailAction = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
