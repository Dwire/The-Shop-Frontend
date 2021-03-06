import React from 'react';
// import {connect} from 'react-redux'
import { Button, Dimmer, Header, Image, Segment } from 'semantic-ui-react'
import EditProfileForm from '../../components/EditProfileForm'
// import {withRouter} from 'react-router-dom'
// import * as actions from '../../actions';

class DashProfileEdit extends React.Component {

  state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })



  render() {
    const { active } = this.state
    return (
      <div >
         <Dimmer.Dimmable className="dimable-div" as={Segment} dimmed={active}>
           <p>
             <Image src='/assets/images/wireframe/short-paragraph.png' />
           </p>
           <h1>Edit Your Profile</h1>
           <h3>Let people know what you are up to</h3>
           <Button icon='plus' onClick={this.handleShow} />

           <Dimmer active={active} onClickOutside={this.handleHide} verticalAlign='top'>
             {/* <Header as='h2' inverted>
               Title
             </Header> */}
              <EditProfileForm handleHide={this.handleHide}/>
           </Dimmer>
         </Dimmer.Dimmable>
       </div>
    );
  }
}


export default DashProfileEdit
