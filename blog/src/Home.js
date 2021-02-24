import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "",email:"" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange (event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
 

  handleSubmit(event) {
    var a=this.state.name;
    console.log(a);
    if(a===""){
      document.getElementById("name-error").innerHTML="<p>*Enter the name Correctly</p>";
    }else{
      document.getElementById("name-error").innerHTML="";
    }
    event.preventDefault();
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
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <span className="name-error"></span>
            </div>
          </div>
          <div className="row>">
            <div className="col-md-12 mb-3">
              <i className="material-icons prefix">email</i>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default Home;
