// FIXME: Is there a better "redux" way to pass props down to user rather then this "React" way
import React from 'react';
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux'
import {NavLink, withRouter, Route} from 'react-router-dom';

import PostForm from './PostForm'
import UserPosts from './UserPosts'

class Posts extends React.Component {

  userPosts = () => {
     return this.props.localUsers.map(user => <UserPosts userPosts={user.posts} />)
  }

  render() {
    return (
      <div className="ui list user-list">
        <h1>Local User Posts</h1>
        {/* <button><NavLink activeClassName="active" to="/post_form">Creat Post</NavLink></button>
        <Route exact path="/post_form" component={PostForm} /> */}
          {this.userPosts()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    localUsers: state.auth.localUsers
  }
}

export default withAuth(connect(mapStateToProps)(Posts));
