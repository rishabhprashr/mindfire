import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { ySearch } from './redux/IsSearchActions.js';

function SearchLocal() {
    const data = useSelector((state) => state.data);
    
    return data.map((movie) => {
        return (
          <div className="card col-md-4" key={movie.id} style={{ borderRadius: "10px", backgroundColor: "#101010" ,width:"300",
          height:"350"}}>
            <div className="movie-card" >
              <img
                src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
                width="200"
                height="300"
                style={{
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
                alt=""
              />
    
              <p className="movie-name">{movie.title}</p>
              <p className="movie-rating">{"Rating:" + movie.vote_average}</p>
            </div>
          </div>
        );
      });
}

export default SearchLocal
