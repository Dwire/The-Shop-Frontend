import React from 'react';
// import Users from '../containers/Users'

const User = (props) => {
  return (
    <div>
        <h2>{props.user.name}</h2>
        <h5>Guru: {props.user.guru}</h5>
        <h5>Current Project: {props.user.project}</h5>
    </div>
    );
}


export default User
