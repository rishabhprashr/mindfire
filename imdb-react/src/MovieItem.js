import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
import axios from "axios";
import { API_URL, API_KEY } from "./config";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  fData,
  fetchMoviePending,
  fetchMovieSuccess,
} from "./redux/IsSearchActions.js";






function MovieItem() {
  const dispatch = useDispatch();
  const mid = useSelector((state) => state.mid);
  console.log(mid);
  if (mid!==undefined && mid!==null) {
      console.log("api call starts");
      const fetchMovie = async () => {
        const data = await fetch(
          `${API_URL}movie/${mid}?api_key=${API_KEY}&language=en-US`);
        const results = await data.json();
        dispatch(fetchMovieSuccess(results));
        console.log("11111"+results);
      };
      dispatch(fetchMoviePending());
      fetchMovie();
    // axios
    // .get(`${API_URL}movie/${mid}?api_key=${API_KEY}&language=en-US`)
    // .then((res) => {
    //   dispatch(fetchMovieSuccess(res));

    // })
    // .catch((error) => {
     
    // });
  }
  
  const movie = useSelector((state) => state.movie);
  const pending=useSelector((state) => state.pending);
  console.log("movie"+movie);

//  const background = "https://image.tmdb.org/t/p/original"+movie.backdrop_path;
//  const styles = {width: '100%', backgroundImage:background ? (`url(${background})`) : null }
  return (
    <div>
        <div>
        <Row>
          <Col
            sm="3"
            style={{
              color: "black",
              margin: "auto",
              backgroundColor: "#f3c517",
              borderRadius: "8px",
            }}
          ><Link to={'/'}>
          <h2>Movie Search</h2>
          </Link>
            
          </Col>
        </Row>
        </div>
        <br></br>
      {!pending?(
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
                src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
              />
              <CardBody>
                <CardTitle tag="h3">{movie.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2">
                  {movie.plot}
                </CardSubtitle>
                <CardText>
                  <h4>{movie.release_date}</h4>
                  <h5>{movie.overview}</h5>
                  <h4>
                    {movie.vote_average}
                    <i
                      className="fas fa-star"
                      style={{ fontSize: "20px", color: "yellow" }}
                    ></i>
                  </h4>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          </Row>
      ):null}
    </div>
  );
}

export default MovieItem;
