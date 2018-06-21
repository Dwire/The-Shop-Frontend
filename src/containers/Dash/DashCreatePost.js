import React from 'react';
import {connect} from 'react-redux'
import { Button, Dimmer, Segment } from 'semantic-ui-react'

import Posts from '../Posts'
import PostForm from '../PostForm'
import * as actions from '../../actions';

class DashCreatePost extends React.Component {
  state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })



  render() {
    const { active } = this.state
    return (
      <div >
         <Dimmer.Dimmable style={{height: "600px"}} dimmed={active}>
           <Button icon='plus' onClick={this.handleShow} />
           <Posts />
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


export default connect(mapStateToProps, actions)(DashCreatePost)
