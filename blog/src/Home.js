import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { name: "", email: "", address: "" };
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  handleValidation() {
    let errors = {};
    let formIsValid = true;
    let name = this.state.name;
    let email = this.state.email;
    let address = this.state.address;
    let mobno = this.state.mobno;

    console.log(name);

    //Name
    if (name === "" ||  name=== undefined) {
      formIsValid = false;
      errors["name"] = "*Please enter name.";
    }

    //Email
    if (email === "" || email === undefined) {
      formIsValid = false;
      errors["email"] = "*Please enter email.";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "*Email is not valid";
      }
    }
    if (mobno === "" || mobno===undefined) {
      formIsValid = false;
      errors["mobno"] = "*Please enter mobile number.";
    }
    if (typeof mobno !== "undefined") {
      var phoneno = /^\d{10}$/;
      if (!mobno.match(phoneno)) {
        formIsValid = false;
        errors["mobno"] = "*Please enter valid mobile number.";
      }
    }
    if (address === "" || address===undefined) {
      formIsValid = false;
      errors["address"] = "*Please enter address.";
    }

    this.setState({ errors: errors });
  

    return formIsValid;
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    this.handleValidation();

  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h4>Registration Form</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h4>Hello {this.state.name}</h4>
          <h6>{this.state.email}</h6>
          <div className="row>">
            <div className="col-md-12 mb-3">
              <i className="material-icons prefix">account_circle</i>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <br></br>
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
            </div>
          </div>
          <div className="row>">
            <div className="col-md-12 mb-3">
              <i className="material-icons prefix">email</i>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <br></br>
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            </div>
          </div>
          <div className="row>">
            <div className="col-md-12 mb-3">
              <i className="material-icons prefix">phone</i>
              <label>Mobile No:</label>
              <input
                type="text"
                name="mobno"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <br></br>
              <span style={{ color: "red" }}>{this.state.errors["mobno"]}</span>
            </div>
          </div>
          <div className="row>">
            <div className="col-md-12 mb-3">
              <i className="material-icons prefix">add_location</i>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <br></br>
              <span style={{ color: "red" }}>
                {this.state.errors["address"]}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3 form-field success">
              <i className="material-icons prefix">assistant_photo</i>
              <label>Country</label>
              <select
                className="custom-select d-block w-100 validate"
                name="country"
                value={this.state.value}
                placeholder="Country"
              >
                <option value="-1">Choose</option>
              </select>
              <span className="helper-text"></span>
            </div>
            <div className="col-md-6 mb-3 form-field success">
              <i className="material-icons prefix">location_city</i>
              <label>State</label>
              <select
                className="select custom-select d-block w-100 validate"
                name="state"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="-1">Choose</option>
              </select>
              <span className="helper-text"></span>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
        <script src="loc_api"></script>
      </div>
    );
  }
}

export default Home;
