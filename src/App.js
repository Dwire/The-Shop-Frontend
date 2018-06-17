import React, { Component } from 'react';
import {NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './containers/Login';
import Register from './containers/Register'
import Profile from './containers/Profile';
import Users from './containers/Users';
import Messages from './containers/Messages'
import Dash from './containers/Dash'
import EditProfileForm from './components/EditProfileForm'
// import Routes from './routes'
import * as actions from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">The Shop</h1>
            <h5>A Community Built Around You</h5>
            <aside className="sidebar">
              {this.props.loggedIn ? (
                <ul>
                  <NavLink activeClassName="active" to="/login"  onClick={e => {
                     e.preventDefault();
                     this.props.logoutUser();
                   }}>Sign Out</NavLink>
                   <NavLink activeClassName="active" to="/profile">Profile</NavLink>
                   <NavLink activeClassName="active" to="/users">Local Users</NavLink>
                   <NavLink activeClassName="active" to="/messages">Message Board</NavLink>
                   <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
                </ul>
               ) : (
                    <ul>
                      <NavLink activeClassName="active" to="/login">Login</NavLink>
                      <NavLink activeClassName="active" to="/register">Registration</NavLink>
                    </ul>
                  )}
            </aside>
          </header>

          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
            <Route path="/dashboard" component={Dash} />
            <Route path="/messages" component={Messages} />
            <Route path="/edit_profile" component={EditProfileForm} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});
// export default connect(mapStateToProps, actions)(App);
export default withRouter(connect(mapStateToProps, actions)(App));










// import React, { Component } from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Login from './Login';
// import Register from './Register'
// import Profile from './Profile';
// import Home from './Home'
// import * as actions from './actions';

// class App extends Component {
//   render() {
//     return (
//       <Home />
//     )
//   }
// }
//       <div className="App">
//         <h2>The Shop</h2>
//         <h4>Time to Sign in or Sign Up</h4>
//         <ul>
//           <li>
//             {this.props.loggedIn ? (
//               <a
//                 onClick={e => {
//                   e.preventDefault();
//                   this.props.logoutUser();
//                 }}
//               >
//                 Sign Out
//               </a>
//             ) : (
//               <Link to="/login">Go to Login</Link>
//             )}
//           </li>
//           <li>
//             <Link to="/register">Go to Registration</Link>
//           </li>
//           <li>
//             <Link to="/profile">Go to Profile</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/profile" component={Profile} />
//         </Switch>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   loggedIn: !!state.auth.currentUser.id
// });
// export default connect(mapStateToProps, actions)(App);

// ---------------------------------------------------------------------------

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
