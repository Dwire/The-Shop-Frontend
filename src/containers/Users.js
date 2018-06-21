// FIXME: Is there a better "redux" way to pass props down to user rather then this "React" way

import React from 'react';
import { connect } from 'react-redux'

import withAuth from '../hocs/withAuth'
import User from '../components/User'

class Users extends React.Component {

  listUsers = () => {
     return this.props.localUsers.map(user => <User user={user} />)
  }

  render() {
    return (
      <div>
        {this.listUsers()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    localUsers: state.auth.localUsers
  }
}

export default withAuth(connect(mapStateToProps)(Users));



// ---------------------------------
// import React from 'react';
// import withAuth from '../hocs/withAuth'
// import { connect } from 'react-redux'
// import User from '../components/User'
//
//  class Users extends React.Component {
//
//    listUsers = () => {
//       return this.props.localUsers.map(user => <li>{user.name}</li>)
//    }
//
//
//   render() {
//     console.log("local:", this.props);
//     return (
//       <div>
//         <h2>Local Users</h2>
//         <ul>
//           {this.listUsers()}
//         </ul>
//       </div>);
//   }
// }
//
//
// function mapStateToProps(state) {
//   return {
//     localUsers: state.auth.localUsers
//   }
// }
//
// export default withAuth(connect(mapStateToProps)(Users));
