// NOTE:
// Fine for now but this is a single object "currentUser". Maybe just use that object to fill information {"name:" currentUser.name}
// rather then converting to array and iterating
// I should iterate for allUsers

import React from 'react';
import {NavLink, withRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import { Card, Icon, Image } from 'semantic-ui-react'

import withAuth from '../hocs/withAuth';
import EditProfileForm from '../components/EditProfileForm'

import ProPic from '../assets/images/website-devices-dark.jpg'
import Working from '../assets/images/working.jpg'

class Profile extends React.Component {



  render() {
    const extra = (
      <a>
        <Icon name='user' />
        16 Posts
      </a>
    )
    return (
      <div className="profile-card">
        <Card fluid={true}>
          <Image src={ProPic}/>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>




      //
      // <div>
      //   <h1>Profile for {this.props.currentUser.name}</h1>
      //   <h4>Name: {this.props.currentUser.name}</h4>
      //   <h4>Email: {this.props.currentUser.email}</h4>
      //   <h4>Guru: {this.props.currentUser.guru}</h4>
      //   <h4>Project: {this.props.currentUser.project}</h4>
      //   <button><NavLink activeClassName="active" to="/edit_profile">Edit Profile</NavLink></button>
      //   <Route exact path="/edit_profile" component={EditProfileForm} />
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}
// NOTE: Potential Profile 
// import { Header, Icon, Image } from 'semantic-ui-react'
// <div>
//   <Header as='h2' icon textAlign='center'>
//     <Icon name='users' circular />
//     <Header.Content>Friends</Header.Content>
//   </Header>
//   <Image centered size='large' src='/assets/images/wireframe/centered-paragraph.png' />
// </div>

// export default withAuth(Profile);
export default withRouter(withAuth(connect(mapStateToProps)(Profile)));
