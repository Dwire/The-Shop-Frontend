import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import * as actions from '../actions';

class Login extends React.Component {
    state = {
      error: false,
      fields: {
        email: '',
        password: ''
      },
      position: {
        lng: undefined,
        lat: undefined,
      }
    };

// NOTE: handles update of location {lng lat} on registration....Same code in login component (DRY)
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


  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { email, password }, position: {lng, lat} } = this.state;
    this.props.loginUser(email, password, lng, lat, this.props.history);
  };


  render() {
    const { fields } = this.state;
    return (
      <div className="login-register">
        <div className="lr-forms">
          <div className="ui middle aligned center aligned grid">
            {this.state.error ? <h1>Try Again</h1> : null}
            <div className="column">

              <form className="ui large form" onSubmit={this.handleSubmit}>
                <div className="ui stacked segment">
                  <h2 className="ui teal image header">
                    {/* <img src="assets/images/logo.png" className="image" alt="logo"/> */}
                    <div className="content">
                          Welcome
                    </div>
                  </h2>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
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

              <div className="ui message lr-form-message">
                New to us? <NavLink activeClassName="active" to="/register">Sign Up</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));
