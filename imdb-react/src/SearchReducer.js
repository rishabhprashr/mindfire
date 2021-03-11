import React, { useState, useEffect } from "react";
import "./App.css";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './config';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { aData } from "./redux/IsSearchActions.js";



function SearchReducer() {
  useEffect(() => {
    fetchMovie();
  }, []);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const fetchMovie = async () => {
    const data = await fetch(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const results = await data.json();
    // console.log(results.results);
    setResults(results.results);
  };
  return results.map((movie) => {
    return (
      <Link to={`/search/${movie.id}`} onClick={()=>dispatch(aData(movie.id))}>
      <div className="card col-md-4" key={movie.id} style={{ borderRadius: "10px", backgroundColor: "#101010" }}>
        <div className="movie-card" >
          <img
            src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
            width="300"
            height="300"
            style={{
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
            }}
            alt=""
          />

          <p className="movie-name">{movie.title}</p>
          <p className="movie-rating">{"Rating:" + movie.vote_average}</p>
        </div>
      </div>
      </Link>
    );
  });
}

export default SearchReducer;
