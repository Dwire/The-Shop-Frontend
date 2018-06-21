// NOTE:
// Fine for now but this is a single object "currentUser". Maybe just use that object to fill information {"name:" currentUser.name}
// rather then converting to array and iterating
// I should iterate for allUsers

import React from 'react';
import {NavLink, withRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import { Header, Icon, Image, List } from 'semantic-ui-react'

import withAuth from '../hocs/withAuth';
import EditProfileForm from '../components/EditProfileForm'

import ProPic from '../assets/images/website-devices-dark.jpg'
import Working from '../assets/images/working.jpg'

class Profile extends React.Component {



  render() {
    return (
      <div style={{ paddingTop: '1em'}}>
        <Header as='h2' icon textAlign='center'>
          {/* <Icon name='users' circular /> */}
          <Header.Content>{this.props.currentUser.name}</Header.Content>
        </Header>
        <div style={{paddingLeft: '1em', marginBottom: '4em'}}>
          <div style={{borderBottom: '1px solid rgba(10, 10, 10, 0.3)'}}>
            <h4>Email: {this.props.currentUser.email}</h4>
            <h4>Guru: {this.props.currentUser.guru}</h4>
            <h4>Project: {this.props.currentUser.project}</h4>
          </div>
        <List>
          <List.Item
            icon='mail'
            content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
          />
          <List.Item icon='github' content='Semantic UI' />
          <List.Item icon='linkedin' content='New York, NY' />

          <List.Item icon='globe' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
        </List>
        </div>

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
