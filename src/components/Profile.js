import React from 'react';
import withAuth from '../hocs/withAuth';

// going to create and import these components
// import userProfile from './userProfile'
// import localUsers from './localUsers'
// import messageBoard from './messageBoard'
// import userMap from './userMap'

const Profile = props => {
  return (
    <div>
      <h1>Time To Talk Shop</h1>
    </div>
  );
};

export default withAuth(Profile);
