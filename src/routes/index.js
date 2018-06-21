import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Register from '../containers/Register'
import Profile from '../containers/Profile';
import Users from '../containers/Users';
import Posts from '../containers/Posts'
import Dash from '../containers/Dash'
import EditProfileForm from '../components/EditProfileForm'
import UserMap from '../containers/UserMap'
import PostForm from '../containers/PostForm'
import HomepageLayout from '../containers/Home'
// import EditProfileForm from '../components/EditProfileForm'

class Routes extends React.Component {
  render(){
    return (
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
    )
  }
}

export default withRouter(Routes)
