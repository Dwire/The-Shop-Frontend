import React from 'react';
// import Users from '../containers/Users'

const User = (props) => {
  return (
    <div>
      {props.toggleView ? (
        <div>
          <h2>{props.user.name}</h2>
          <h5>Email: {props.user.email}</h5>
          <h5>Guru: {props.user.guru}</h5>
          <h5>Current Project: {props.user.project}</h5>
          <button onClick={props.handleClick}>Show Less</button>
        </div>
      ) : (
        <div>
          <h2>{props.user.name}</h2>
          <h5>Guru: {props.user.guru}</h5>
          <h5>Current Project: {props.user.project}</h5>
          <button onClick={props.handleClick}>Show More</button>
        </div>
      )}
    </div>
    );
}


export default User
