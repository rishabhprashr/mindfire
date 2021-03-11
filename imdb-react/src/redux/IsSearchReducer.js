import {
  Y_SEARCH,
  N_SEARCH,
  ADD_DATA,
  F_DATA,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
} from "./IsSearchTypes.js";
import data from "./../data.js";

const initialState = {
  isSearch: false,
  data: data,
  mid: "",
  pending: false,
  movie: [],
  search:''
};

const isSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Y_SEARCH:
      return { isSearch: true };
    case N_SEARCH:
      return { isSearch: false };
    case ADD_DATA:
      return { mid: action.value };
    case F_DATA:
      return { search: action.value };
    case FETCH_MOVIE_PENDING:
      return { pending: true };
    case FETCH_MOVIE_SUCCESS:
      return {pending:false, movie: action.value };
    default:
      return state;
  }
};



export default isSearchReducer;
