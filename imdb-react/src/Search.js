import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

function Search() {
  const [movie, changeMovie] = useState("");
  const [search, updateSearch] = useState("");
  const [movieInfo, updateMovieInfo] = useState({});
  const [errorText, updateErrorText] = useState("");

  function addHTML(res) {
    let obj = {
      search: res.data.Title,
    };

    if (res.data.Title) obj = { ...obj, name: `Name: ${res.data.Title}` };
    if (res.data.Year)
      obj = { ...obj, year: `Year of Release: ${res.data.Year}` };
    if (res.data.Rated) obj = { ...obj, rated: `PG-Rating: ${res.data.Rated}` };
    if (res.data.imdbRating)
      obj = { ...obj, imdb: `IMDB Rating: ${res.data.imdbRating}` };
    if (res.data.Plot) obj = { ...obj, plot: `Plot: ${res.data.Plot}` };
    console.log(JSON.stringify(obj));
    if (res.data.Poster) obj = { ...obj, poster: `${res.data.Poster}` };
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
      axios
        .get(
          `http://www.omdbapi.com/?t=${movie
            .split(" ")
            .join("+")}&apikey=9cebfeb8`
        )
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
          if (error.response.status === 404) {
            updateMovieInfo({
              error: "Sorry, there seems to be no movie with this name.",
            });
          }
        });
    }
    console.log(`movieInfo = ${movieInfo}`);
    event.preventDefault();
  }

  return (
    <div style={{ fontSize: "20px" }}>
      <form action="#" onSubmit={handleSearch}>
        <input
          id="text-field"
          style={{borderRadius: "6px"}}
          placeholder="Enter a movie to search.."
          value={movie}
          onChange={(ev) => {
            updateErrorText("");
            changeMovie(ev.target.value);
          }}
          type="text"
          autoFocus
        />
        <Button color="primary" style={{ marginLeft: "20px",borderRadius: "6px" }}>
          Search
        </Button>

        {/*used to display error texts, if any*/}
        <div style={{ color: "red" }}>{errorText}</div>

        <div style={{ marginTop: "20px" }}>{movieInfo.error}</div>

        {/* conditional rendering, only if the avatar_url is available */}
        {movieInfo.name ? (
          <Row>
            <Col sm="6" style={{ margin: "auto" }}>
              <Card  style={{borderRadius: "10px",backgroundColor:"#101010"}}>
                <CardImg
                  style={{
                    marginTop: "20px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "200px",
                    height: "250px",
                    borderRadius: "10px"
                  }}
                  alt="poster"
                  src={movieInfo.poster}
                />
                <CardBody>
                  <CardTitle tag="h5">{movieInfo.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2">
                    {movieInfo.plot}
                  </CardSubtitle>
                  <CardText>
                    <div>{movieInfo.year}</div>
                    <div>{movieInfo.rated}</div>
                    <div>
                      {movieInfo.imdb}
                      <i
                        className="fas fa-star"
                        style={{ fontSize: "20px", color: "yellow" }}
                      ></i>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : null}
      </form>
    </div>
  );
}

export default Search;
