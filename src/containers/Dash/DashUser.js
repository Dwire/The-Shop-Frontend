import React from 'react';
import {connect} from 'react-redux'
import { Button, Dimmer, Segment } from 'semantic-ui-react'

import User from '../../components/User'

import PostForm from '../PostForm'
import * as actions from '../../actions';

class Users extends React.Component {
  state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })


    listUsers = () => {
       return this.props.localUsers.map(user => <User user={user} />)
    }

  render() {
    const { active } = this.state
    return (
      <div >
         <Dimmer.Dimmable className="dimable-div" dimmed={active}>
           <Button icon='plus' onClick={this.handleShow} />
           {this.listUsers()}
           <Dimmer active={active} onClickOutside={this.handleHide} verticalAlign='top'>
             {/* <Header as='h2' inverted>
               Create Your Post
             </Header> */}
             <PostForm handleHide={this.handleHide} />
           </Dimmer>
         </Dimmer.Dimmable>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps, actions)(Users)
