import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


import withAuth from '../hocs/withAuth';

import React from 'react';
import Profile from './Profile'
import Users from './Users'
// import Posts from './Posts'
import UserMap from './UserMap'
import Footer from './layout/Footer'
import NavBar from './layout/NavBar'


import DashProfileEdit from './Dash/DashProfileEdit'
import DashCreatePost from './Dash/DashCreatePost'

class Dash extends React.Component {

  render() {
    return (
      <div>
        <div className='dash-body'>
          <div className='dash-inner-body'>
            <NavBar />
            <div className="ui two column grid">

              <div className="two column row profile-section">
                <div className="column profile"><Profile /></div>
                <div className="column"><DashProfileEdit /></div>
              </div>

              <div className='users-posts'>
                <div className='users-outer'>
                {/* <div className='heading'> */}
                  <h1 style={{color: "teal", textAlign: "center", background: 'rgba(10,10,10,0.4)'}}>LOCAL USERS</h1>
                {/* </div> */}
                  <div className="users">
                    <div className="column"><Users /></div>
                  </div>
                </div>
                <div className='posts-outer'>

                  <h1 style={{color: "teal", textAlign: "center", background: 'rgba(10,10,10,0.4)'}}>LOCAL POSTS</h1>

                  <div className='posts'>
                    <div className="column"><DashCreatePost/></div>
                  </div>
                </div>
              </div>

              {/* <div className="map-container"> */}
                <div className="column user-map"><UserMap /></div>
              {/* </div> */}

            </div>
          </div>
        </div>
        <Footer />
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
export default withRouter(withAuth(connect(mapStateToProps)(Dash)));
