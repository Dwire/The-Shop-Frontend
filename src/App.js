import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './containers/Login';
import Register from './containers/Register'
import Profile from './containers/Profile';
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
                </ul>
               ) : (
                    <ul>
                      <NavLink activeClassName="active" to="/login">Login</NavLink>
                      <NavLink activeClassName="active" to="/register">Registration</NavLink>
                      <NavLink activeClassName="active" to="/profile">Profile</NavLink>
                    </ul>
                  )}
            </aside>
          </header>

          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
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
