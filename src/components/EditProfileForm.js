import React from 'react';
import { connect } from 'react-redux'

import withAuth from '../hocs/withAuth';


class EditProfileForm extends React.Component {

  state = {
    name: "",
    guru: "",
    project: "",
    email: ""
  }

  componentDidMount() {
    let {name, guru, project, email} = this.props.currentUser
    this.setState({
      name,
      guru,
      project,
      email
    })
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    //redirect to profile.
  }


  render(){
    console.log("someprops:", this.props);
    return (
      <form>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  />
        <br/>
        <label>Guru</label>
        <input type="text" name="guru" value={this.state.guru} onChange={this.handleChange}  />
        <br/>
        <label>Project</label>
        <input type="text" name="project" value={this.state.project} onChange={this.handleChange}  />
        <br/>
        <label>Email</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}  />
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }

}


function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}

export default withAuth(connect(mapStateToProps)(EditProfileForm));
