import React from 'react';
// import {connect} from 'react-redux'
import { Button, Dimmer, Header, Image, Segment } from 'semantic-ui-react'
import EditProfileForm from '../../components/EditProfileForm'
// import {withRouter} from 'react-router-dom'
// import * as actions from '../../actions';

import Dark from '../../assets/images/apple-devices-dark2.jpg'
import Profile from '../Profile'

class DashProfileEdit extends React.Component {

  state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })



  render() {
    const { active } = this.state
    return (
      <div >
         <Dimmer.Dimmable className="dimable-div" dimmed={active}>
            {/* <Image src={Dark} /> */}
            <Profile />
           <Button icon='plus' onClick={this.handleShow} />

           <Dimmer active={active} onClickOutside={this.handleHide} verticalAlign='top'>
              <EditProfileForm handleHide={this.handleHide}/>
           </Dimmer>
         </Dimmer.Dimmable>
       </div>
    );
  }
}


export default DashProfileEdit
