// import {withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
import React, { Component } from 'react';
import Routes from './routes'


class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   loggedIn: !!state.auth.currentUser.id
// });
// export default connect(mapStateToProps, actions)(App);
// export default withRouter(connect(mapStateToProps, null)(App));
export default App;
