// NOTE:
// Fine for now but this is a single object "currentUser". Maybe just use that object to fill information {"name:" currentUser.name}
// rather then converting to array and iterating
// I should iterate for allUsers

import React from 'react';
import {NavLink, withRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import withAuth from '../hocs/withAuth';
import EditProfileForm from '../components/EditProfileForm'

class Profile extends React.Component {

  render() {
    return (
      
      <div>
        <h1>Profile for {this.props.currentUser.name}</h1>
        <h4>Name: {this.props.currentUser.name}</h4>
        <h4>Email: {this.props.currentUser.email}</h4>
        <h4>Guru: {this.props.currentUser.guru}</h4>
        <h4>Project: {this.props.currentUser.project}</h4>
        <button><NavLink activeClassName="active" to="/edit_profile">Edit Profile</NavLink></button>
        <Route exact path="/edit_profile" component={EditProfileForm} />
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
export default withRouter(withAuth(connect(mapStateToProps)(Profile)));
