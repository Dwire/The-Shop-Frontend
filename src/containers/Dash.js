import React from 'react';
import Profile from './Profile'
import Users from './Users'
import Posts from './Posts'
import UserMap from './UserMap'

export default class Dash extends React.Component {

  render() {
    return (
      <div className="ui two column grid">
        <div className="two column row">
          <div className="left floated column profile"><Profile /></div>
        </div>
        <div className="column users"><Users /></div>
        <div className="column posts"><Posts /></div>
        <div className="column user-map"><UserMap /></div>
      </div>

    );
  }
}
