import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;
    let name = this.state.name;
    if (name === "" || name === undefined) {
      formIsValid = false;
      errors["name"] = "*Please enter name.";
    }
    this.setState({ errors: errors });

    return formIsValid;
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
        const response = await fetch(
            `https://api.github.com/users/${this.state.name}`
          );
          const user = await response.json();
          this.setState({ user: user });
      } 
    
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
    }

    return (
      <div className="container">
        <div className="py-5 text-center">
          <h4>Github User Search</h4>
        </div>
        <div className="col-md-12 mb-3">
          <form onSubmit={this.handleSubmit}>
            <img className="d-block mx-auto mb-4 circle responsive-img"
             id="img" width="172" height="172" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPxjKOU8aG3SpCX3CbQyZcocXLLdeo6bl-w&usqp=CAU" />
            <h2 id="usrname" style={{ textAlign: "center" }}>
            </h2>
            <a
              id="usrurl"
              style={{ textAlign: "center", display: "block" }}
              href="www.google.com"
            >
            </a>
            <p id="bio" style={{ textAlign: "center" }}></p>
            <div className="row>">
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name to search..."
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br></br>
            <p style={{ color: "red", textAlign: "center" }}>{this.state.errors["name"]}</p>

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
