import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        name: '',
        email: '',
        password: ''
      },
      position: {
        lng: undefined,
        lat: undefined,
      }
    };
    this.updateUserPosition = this.updateUserPosition.bind(this);
  }

  success = (pos) => {
    let crd = pos.coords;
    const newPosition = {...this.state.position,  lng: crd.longitude, lat: crd.latitude}
    this.setState({position: newPosition})
  }

  error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  componentDidMount() {
   let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }



  // getUserLocation = () => {
  //   let pos = {}
  //   if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //   //the browser supports geolocation and permission was given
  //     pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     }
  //     this.updateUserPosition(pos)
  //   }, function() {
  //   //the browser supports geolocation but they denied permission
  //     console.log("Need Your location");
  //   })
  //   } else {
  //   //the browser doesnt support geolocation
  //     console.log("use a different browser");
  //   }
  // }


  updateUserPosition = (pos) => {
    debugger
    const newPosition = {...this.state.position, lat: pos.lat, lng: pos.lng}
    this.setState({position: newPosition})
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { name, email, password }, position: {lng, lat} } = this.state;
    this.props.registerUser(name, email, password, lng, lat, this.props.history);
  };

  render() {
    const { fields } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="column">
          <h2 className="ui teal image header">
            <img src="assets/images/logo.png" className="image" alt="logo"/>
            <div className="content">
                  Register a New account
            </div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name Here"
                    value={fields.name}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="mail icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    value={fields.email}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={fields.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button className="ui fluid large teal submit button">Submit</button>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            Already Have Account? <a href="#">Log In</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Register));
