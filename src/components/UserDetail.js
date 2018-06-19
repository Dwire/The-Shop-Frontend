import React from 'react';
// import Users from '../containers/Users'
// import UserDetail from './UserDetail'

const UserDetail = (props) => {
    return (
        <div>
          <div class="item">
            <div class="content">
              <i class="mail icon"></i><a href="mailto:jack@semantic-ui.com">Email: {props.user.email}</a>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <i class="linkify icon"></i><a href="http://www.semantic-ui.com">semantic-ui.com</a>
            </div>
          </div>
        </div>
      );
  }

export default UserDetail
