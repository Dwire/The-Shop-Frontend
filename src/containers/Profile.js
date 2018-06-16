// NOTE:
// Fine for now but this is a single object "currentUser". Maybe just use that object to fill information {"name:" currentUser.name}
// rather then converting to array and iterating
// I should iterate for allUsers

import React from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux'

class Profile extends React.Component {
  
  handleClick = (e) => {
    console.log("click");
  }

  render() {
    return (
      <div>
        <h1>Profile for {this.props.currentUser.name}</h1>
        <h4>Name: {this.props.currentUser.name}</h4>
        <h4>Email: {this.props.currentUser.email}</h4>
        <h4>Guru: {this.props.currentUser.guru}</h4>
        <h4>Project: {this.props.currentUser.project}</h4>
        <button onClick={this.handleClick}>Edit Profile</button>
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
export default withAuth(connect(mapStateToProps)(Profile));



  // userAttributes = () => {
  //   let keyId = 100;
  //   let userObj = this.props.currentUser
  //   let userArr = Object.entries(userObj)
  //
  //   return userArr.map(attr => {
  //     keyId++
  //     return <li key={keyId}> {attr[0]}: {attr[1]} </li>
  //   })
  // }
