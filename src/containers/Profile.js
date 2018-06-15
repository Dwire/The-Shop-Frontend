import React from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux'

class Profile extends React.Component {

  userAttributes = () => {
    let keyId = 100;
    let userObj = this.props.currentUser
    let userArr = Object.entries(userObj)

    return userArr.map(attr => {
      keyId++
      return <li key={keyId}>{attr[0]}: {attr[1]}</li>
    })
  }

  render() {
    return (
      <div>
        <h1>Time To Talk Shop</h1>
        <ul>
          {this.userAttributes()}
        </ul>
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
