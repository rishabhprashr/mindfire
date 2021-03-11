import {ADD_DATA} from './IsSearchTypes';
import data from './data'


const initialState = {data: null};

const DisplayDef = (state=initialState, action) => {
    switch(action.type){
        case ADD_DATA:
            return {data: data};
        default:
            return state;
    }
};

