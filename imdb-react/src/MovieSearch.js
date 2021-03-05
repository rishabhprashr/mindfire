import React from "react";
import Search from "./Search.js";
import { Row, Col } from "reactstrap";

function MovieSearch() {
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
          >
            <h2>Movie Search</h2>
          </Col>
        </Row>
      </div>
      <p>Search for movie details.</p>
      <Search />
    </div>
  );
}

export default MovieSearch;
