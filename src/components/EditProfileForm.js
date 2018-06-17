import React from 'react';
import { connect } from 'react-redux'

import withAuth from '../hocs/withAuth';


class EditProfileForm extends React.Component {

  state = {
    fields: {
      name: "",
      guru: "",
      project: "",
      email: ""
    }
  }

  componentDidMount() {
    let {name, guru, project, email} = this.props.currentUser
    this.setState({ ...this.state.fields,
      name,
      guru,
      project,
      email
    })
  }


  handleChange = (e) => {
    const newFields = {...this.state.fields, [e.target.name]: e.target.value}
    this.setState({ fields: newFields})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('click');
    //redirect to profile.
  }


  render(){
    console.log("someprops:", this.props);
    const { fields } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="column">
          <h2 className="ui teal image header">
            <img src="assets/images/logo.png" className="image" alt="logo"/>
            <div className="content">
                  Edit your account
            </div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="What is your name?"
                    value={fields.name}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="mail icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    value={fields.email}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="Guru"
                    placeholder="What Areas Do You Dominate?"
                    value={fields.guru}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="project"
                    placeholder="What are you working on today?"
                    value={fields.project}
                    onChange={this.handleChange} />
                </div>
              </div>
              <button className="ui fluid large teal submit button">Submit</button>
            </div>

            <div className="ui error message"></div>

          </form>
        </div>
      </div>

      // <form onSubmit={this.handleSubmit}>
      //   <label>Name</label>
      //   <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  />
      //   <br/>
      //   <label>Guru</label>
      //   <input type="text" name="guru" value={this.state.guru} onChange={this.handleChange}  />
      //   <br/>
      //   <label>Project</label>
      //   <input type="text" name="project" value={this.state.project} onChange={this.handleChange}  />
      //   <br/>
      //   <label>Email</label>
      //   <input type="text" name="email" value={this.state.email} onChange={this.handleChange}  />
      //   <br/>
      //   <input type="submit" value="Submit" />
      // </form>
    );
  }

}


function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}

export default withAuth(connect(mapStateToProps)(EditProfileForm));


{/* <label>
  Profile Pic:
  <input
    type="file"
    ref={input => {
      this.fileInput = input;
    }}
  />
</label>
<br/> */}
