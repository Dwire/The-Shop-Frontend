// pull out code into presentational/dumb user component

import React from 'react';
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux'

 class Users extends React.Component {

   listUsers = () => {
      return this.props.localUsers.map(user => <li>{user.name}</li>)
   }


  render() {
    console.log("local:", this.props);
    return (
      <div>
        <h2>Local Users</h2>
        <ul>
          {this.listUsers()}
        </ul>
      </div>);
  }
}


function mapStateToProps(state) {
  return {
    localUsers: state.auth.localUsers
  }
}

export default withAuth(connect(mapStateToProps)(Users));
