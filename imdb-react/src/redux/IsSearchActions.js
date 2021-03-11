import { Y_SEARCH, N_SEARCH,ADD_DATA,F_DATA ,FETCH_MOVIE_PENDING,FETCH_MOVIE_SUCCESS} from './IsSearchTypes.js';
import data from './../data.js';

export const ySearch = () => {
    return {
        type: Y_SEARCH
    };
};

export const nSearch = () => {
    return {
        type: N_SEARCH
    };
};

export const aData=(data)=>{
    return{
        type:ADD_DATA,
        value:data
    };
};
export const fData=(data)=>{
    return{
        type:F_DATA,
        value:data
    }
}
export const fetchMoviePending=() =>{
    return {
        type: FETCH_MOVIE_PENDING
    }
}

export const fetchMovieSuccess=(movie)=> {
    console.log("details",movie);
    return {
        type: FETCH_MOVIE_SUCCESS,
        value:movie
    }
}

