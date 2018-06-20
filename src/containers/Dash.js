import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import withAuth from '../hocs/withAuth';

import React from 'react';
import Profile from './Profile'
import Users from './Users'
// import Posts from './Posts'
import UserMap from './UserMap'

import DashProfileEdit from './Dash/DashProfileEdit'
import DashCreatePost from './Dash/DashCreatePost'

class Dash extends React.Component {

  render() {
    return (
      <div className="ui two column grid">
        <div className="two column row profile-sec">
          <div className="column profile"><Profile /></div>
          <div className="column profile-edit"><DashProfileEdit /></div>
        </div>
        <div className="column users"><Users /></div>
        <div className="column posts"><DashCreatePost/></div>
        <div className="column user-map"><UserMap /></div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}

// export default withAuth(Profile);
export default withRouter(withAuth(connect(mapStateToProps)(Dash)));
