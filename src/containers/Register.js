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
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { name, email, password } } = this.state;
    this.props.registerUser(name, email, password, this.props.history);
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
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
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
