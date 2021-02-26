import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      `https://api.github.com/users/${this.state.name}`
    );
    const user = await response.json();
    this.setState({ user: user });
  }

  render() {
    const user = this.state.user;
    if (user !== undefined && user !== null) {
      document.getElementById("usrname").innerHTML = user.name;
      document.getElementById("usrurl").href = user.html_url;
      document.getElementById("usrurl").innerHTML = user.html_url;
      document.getElementById("bio").innerHTML = user.bio;
      document.getElementById("img").src = user.avatar_url;
      document.getElementById("img").className =
        "d-block mx-auto mb-4 circle responsive-img";

      // Gather up some number stats about the user, to be used in a map below
    }

    return (
      <div className="container">
        <div className="py-5 text-center">
          <h4>Github User Search</h4>
        </div>
        <div className="col-md-12 mb-3">
          <form onSubmit={this.handleSubmit}>
            <img className="d-none" id="img" width="172" height="172" alt="" />
            <h2 id="usrname" style={{ textAlign: "center" }}>
              &nbsp;
            </h2>
            <a
              id="usrurl"
              style={{ textAlign: "center", display: "block" }}
              href="www.google.com"
            >
              &nbsp;
            </a>
            <p id="bio" style={{ textAlign: "center" }}></p>
            <div className="row>">
              <div className="col-md-12 mb-3">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br></br>

            <input
              type="submit"
              value="Search"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Search;
