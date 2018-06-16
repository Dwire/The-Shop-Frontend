import React from 'react';
import Profile from './Profile'
import Users from './Users'
import Messges from './Messages'

export default class Dash extends React.Component {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Profile />
        <Users />
      </div>
    );
  }
}
