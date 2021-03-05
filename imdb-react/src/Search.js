import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

function Search() {
  const [movie, changeMovie] = useState("");
  const [search, updateSearch] = useState("");
  const [movieInfo, updateMovieInfo] = useState({});
  const [errorText, updateErrorText] = useState("");

  function addHTML(res) {
    console.log(
      `res = ${res} ${res.data.login} ${res.data.name} ${res.data.avatar_url}`
    );
    let obj = {
      search: res.data.Title,
    };

    if (res.data.Title) obj = { ...obj, name: `Name: ${res.data.Title}` };
    if (res.data.Year)
      obj = { ...obj, year: `Year of Release: ${res.data.Year}` };
    if (res.data.Rated) obj = { ...obj, rated: `PG-Rating: ${res.data.Rated}` };
    if (res.data.imdbRating)
      obj = { ...obj, imdb: `IMDB Rating: ${res.data.imdbRating}` };
    console.log(JSON.stringify(obj));
    updateMovieInfo(obj);
  }

  function handleSearch(event) {
    updateSearch(movie);

    console.log(`user = ${movie} and login = ${search}`);
    if (movie === "" || movie === null) {
      updateErrorText("Input field is empty");
      updateMovieInfo({ error: "" });
    } else if (search !== movie) {
      console.log("Clicked on search with user=" + movie);

      const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
      if (!regex.test(movie)) {
        updateErrorText("Please enter a correct moviename");
        updateMovieInfo({});
      } else {
        axios
          .get(`http://www.omdbapi.com/?t=${movie}&apikey=9cebfeb8`)
          .then((res) => {
            console.log(res.data);
            if (res.data.Response === "False") {
              updateMovieInfo({
                error: "Sorry, there seems to be no movie with this name.",
              });
            } else {
              updateSearch(res.data.Title);
              addHTML(res);
            }
          })
          .catch((error) => {
            console.log(`${error.response.status} error is ${error}`);
            // 404 means user not found for the particular username
            if (error.response.status === 404) {
              updateMovieInfo({
                error: "Sorry, there seems to be no movie with this name.",
              });
            }
          });
      }
    }
    console.log(`movieInfo = ${movieInfo}`);
    event.preventDefault();
  }

  return (
    <div style={{ fontSize: "20px" }}>
      <form action="#" onSubmit={handleSearch}>
        <input
          id="text-field"
          placeholder="Enter a movie to search.."
          value={movie}
          onChange={(ev) => {
            updateErrorText("");
            changeMovie(ev.target.value);
          }}
          type="text"
          autoFocus
        />
        <Button color="primary" style={{ marginLeft: "20px" }}>
          Search
        </Button>

        {/*used to display error texts, if any*/}
        <div style={{ color: "red" }}>{errorText}</div>

        <div style={{ marginTop: "20px" }}>{movieInfo.error}</div>

        {/* conditional rendering, only if the avatar_url is available */}
        {movieInfo.avatar_url ? (
          <img
            style={{
              marignTop: "20px",
              borderRadius: "50%",
              width: "150px",
              height: "150px",
            }}
            alt="user avatar"
            src={movieInfo.avatar_url}
          />
        ) : null}
        <div>{movieInfo.name}</div>
        <div>{movieInfo.year}</div>
        <div>{movieInfo.rated}</div>
        <div>{movieInfo.imdb}</div>
      </form>
    </div>
  );
}

export default Search;
