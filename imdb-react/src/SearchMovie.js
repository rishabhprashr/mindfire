import React, { useState } from "react";
import axios from "axios";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './config';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Button
} from "reactstrap";
import { useDispatch } from "react-redux";
import { ySearch } from './redux/IsSearchActions.js';

function Search() {
  const [movie, changeMovie] = useState("");
  const [search, updateSearch] = useState("");
  const [movieInfo, updateMovieInfo] = useState({});
  const [errorText, updateErrorText] = useState("");

  const dispatch = useDispatch();

  function handleSearch(event) {

    dispatch(ySearch());
    updateSearch(search);
    let endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${movie}`;
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
        updateMovieInfo(result.results);
    })
    .catch(error => console.error('Error', error))
    console.log(movieInfo);
    event.preventDefault();
  }

  return (
    <div style={{ fontSize: "20px" }}>
      <form action="#" onSubmit={handleSearch}>
        <input
          id="text-field"
          style={{ borderRadius: "6px",color: "black" }}
          placeholder="Enter a movie to search.."
          value={movie}
          onChange={(ev) => {
            updateErrorText("");
            changeMovie(ev.target.value);
          }}
          type="text"
          autoFocus
        />
        <Button
          color="primary"
          style={{ marginLeft: "20px", borderRadius: "6px" }}
        >
          Search
        </Button>

        <div style={{ color: "red" }}>{errorText}</div>
        {console.log('user'+movieInfo)}

        
      </form>
    </div>
  );
}

export default Search;
