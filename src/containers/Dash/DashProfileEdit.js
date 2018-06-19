import React from 'react';
import {connect} from 'react-redux'
import { Button, Dimmer, Header, Image, Segment } from 'semantic-ui-react'
import EditProfileForm from '../../components/EditProfileForm'
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions';

class DashProfileEdit extends React.Component {

  state = {
    active: false,
  }

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })



  render() {
    const { active } = this.state
    return (
      <div className="dimable">
         <Dimmer.Dimmable as={Segment} dimmed={active}>
           <p>
             <Image src='/assets/images/wireframe/short-paragraph.png' />
           </p>
           <Button icon='plus' onClick={this.handleShow} />

           <Dimmer active={active} onClickOutside={this.handleHide} verticalAlign='top'>
             <Header as='h2' inverted>
               Title
             </Header>
              <EditProfileForm handleHide={this.handleHide}/>
           </Dimmer>
         </Dimmer.Dimmable>


         <Button.Group>
           <Button icon='plus' onClick={this.handleShow} />
           <Button icon='minus' onClick={this.handleHide} />
         </Button.Group>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}


export default withRouter(connect(mapStateToProps, actions)(DashProfileEdit));
