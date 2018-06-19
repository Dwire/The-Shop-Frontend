import React from 'react';
// import Users from '../containers/Users'
// import UserDetail from './UserDetail'

const UserDetail = (props) => {
    return (
        <div>
          <div className="item">
            <div className="content">
              <i className="mail icon"></i><a href="mailto:jack@semantic-ui.com">Email: {props.user.email}</a>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <i className="blue linkedin icon"></i><a href="http://www.semantic-ui.com">semantic-ui.com</a>
            </div>
          </div>
        </div>
      );
  }

export default UserDetail
