import React, { Component } from 'react';
import {NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './containers/Login';
import Register from './containers/Register'
import Profile from './containers/Profile';
import Users from './containers/Users';
import Posts from './containers/Posts'
import Dash from './containers/Dash'
import EditProfileForm from './components/EditProfileForm'
import UserMap from './containers/UserMap'
import PostForm from './containers/PostForm'
import HomepageLayout from './containers/Home'
// import Home from './containers/Home'
// import Routes from './routes'
import * as actions from './actions';

class App extends Component {
  render() {
    return (
        <div>
          {/* {this.props.loggedIn ? (
          <div className="ui top fixed inverted menu">
            <NavLink className="item" activeClassName="active" to="/profile">Profile</NavLink>
            <NavLink className="item" activeClassName="active" to="/users">Local Users</NavLink>
            <NavLink className="item" activeClassName="active" to="/posts">Message Board</NavLink>
            <NavLink className="item" activeClassName="active" to="/map">User Map</NavLink>
            <NavLink className="item" activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <div className="right menu">
              <NavLink className="item" activeClassName="active" to="/login"  onClick={e => {
                 e.preventDefault();
                 this.props.logoutUser();
              }}>Sign Out</NavLink>
            </div>
          </div>

            ) : (
          <div className="ui inverted menu navbar">
              <div className="right menu">
                <NavLink className="item" activeClassName="active" to="/login">Login</NavLink>
                <NavLink className="item" activeClassName="active" to="/register">Register</NavLink>
              </div>
          </div>
          )} */}


              <Switch>
                <Route exact path="/" component={HomepageLayout} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/users" component={Users} />
                <Route path="/dashboard" component={Dash} />
                <Route path="/posts" component={Posts} />
                <Route path="/edit_profile" component={EditProfileForm} />
                <Route path="/post_form" component={PostForm} />
                <Route path="/map" component={UserMap} />
              </Switch>
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
