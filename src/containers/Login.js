import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
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
    const { fields: { email, password } } = this.state;
    this.props.loginUser(email, password, this.props.history);
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
                  Log-in to your account
            </div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
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

          <div className="ui message">
            New to us? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));
//
// <div>
//   {this.state.error ? <h1>Try Again</h1> : null}
//   <h1>Log In Form</h1>
//   <div className="ui form">
//     <form onSubmit={this.handleSubmit}>
//       <div className="ui field">
//         <label>Email</label>
//         <input
//           name="email"
//           placeholder="email"
//           value={fields.email}
//           onChange={this.handleChange}
//         />
//       </div>
//       <div className="ui field">
//         <label>Password</label>
//         <input
//           name="password"
//           type="password"
//           placeholder="password"
//           value={fields.password}
//           onChange={this.handleChange}
//         />
//       </div>
//       <button type="submit" className="ui basic green button">
//         Login
//       </button>
//     </form>
//   </div>
// </div>
