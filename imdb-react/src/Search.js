import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { API_URL, API_KEY } from "./config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ySearch, aData ,fData} from "./redux/IsSearchActions.js";

function Search() {
  const [movie, changeMovie] = useState("");
  const [search, updateSearch] = useState("");
  const [movieInfo, updateMovieInfo] = useState([]);
  const [errorText, updateErrorText] = useState("");

  let test = {};

  const dispatch = useDispatch();

  function addHTML(res) {
    console.log(res.data.results);
    res.data.results.map((movie) => {
      console.log(movie);
    });
    updateMovieInfo(res.data.results);
    test = res.data.results;
    console.log("test = " + test);
  }

  function display(movieInfo) {
    //console.log("123" + JSON.stringify(movieInfo));
    return movieInfo.map((movie) => {
      console.log("123" + JSON.stringify(movie));
      
      return (
        <Link to={`/search/${movie.id}`} onClick={()=>dispatch(aData(movie.id))}>
          <div
            className="card col-md-4 cust"
            key={movie.id}
            style={{ borderRadius: "10px", backgroundColor: "#101010" }}
          >
            <div className="movie-card">
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

  function handleSearch(event) {
    dispatch(ySearch());
    updateSearch(movie);
    if (movie === "" || movie === null) {
      updateErrorText("Input field is empty");
      updateMovieInfo({ error: "" });
    } else if (search !== movie) {
      axios
        .get(
          `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${movie}`
        )
        .then((res) => {
          // console.log("user"+JSON.stringify(res));
          if (res.data.Response === "False") {
            updateMovieInfo({
              error: "Sorry, there seems to be no movie with this name.",
            });
          } else {
            updateSearch(movie);
            addHTML(res);
          }
        })
        .catch((error) => {
          
        });
      
    }
    event.preventDefault();
  }

  return (
    <div style={{ fontSize: "20px" }}>
      {/* {console.log(`movies log = ${movieInfo}`)} */}
      <form action="#" onSubmit={handleSearch}>
        <input
          id="text-field"
          style={{ borderRadius: "6px", color: "black" }}
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

        <div style={{ marginTop: "20px" }}>{movieInfo.error}</div>
        <div>{display(movieInfo)}</div>
      </form>
    </div>
  );
}

export default Search;
