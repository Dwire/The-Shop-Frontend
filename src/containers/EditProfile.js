import React from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
// import EditProfileForm from '../components/EditProfileFrom';

class EditProfile extends React.Component {
  // state = {
  //   name:,
  //   email:,
  //   guru:,
  //   project:
  // }


  render() {
    return (
      <div>
        <form>
          <label>NAME</label>
          <input type="text" value={props.user.}>
        </form>
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
export default withAuth(connect(mapStateToProps)(EditProfile));
