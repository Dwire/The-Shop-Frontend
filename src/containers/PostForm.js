import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import withAuth from '../hocs/withAuth';
import * as actions from '../actions';


class PostForm extends React.Component {

  state = {
    fields: {
      id: null,
      topic: "",
      title: "",
      body: "",
      user_id: null
    }
  }

  componentWillMount() {
    let {id} = this.props.currentUser
    const setCurrentUser = { ...this.state.fields, user_id: id};
    this.setState({fields: setCurrentUser})
  }

  handleChange = (e) => {
    const newFields = {...this.state.fields, [e.target.name]: e.target.value}
    this.setState({fields: newFields})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {fields: {topic, title, body, user_id}} = this.state;
    this.props.createPost(topic, title, body, user_id, this.props.history);
    this.props.handleHide()
  }


  render(){
    const { fields } = this.state;
    return (
      <div className="post-form">
        <div className="ui middle aligned center aligned grid">
          {this.state.error ? <h1>Try Again</h1> : null}
          <div className="column">
            <h2 className="ui teal image header">
              {/* <img src="assets/images/logo.png" className="image" alt="logo"/> */}
              {/* <div className="content">
                  Start Talking Shop
              </div> */}
            </h2>
            <form className="ui large form" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="topic"
                      placeholder="Choose A Topic"
                      value={fields.topic}
                      onChange={this.handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="mail icon"></i>
                    <input
                      type="text"
                      name="title"
                      placeholder="Create a Title"
                      value={fields.title}
                      onChange={this.handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="star icon"></i>
                    <input
                      type="text"
                      name="body"
                      placeholder="what do you want to say/ask"
                      value={fields.body}
                      onChange={this.handleChange} />
                  </div>
                </div>
                  {/* <button className="ui fluid large teal submit button">Submit</button> */}
              </div>

              <div className="ui error message"></div>

            </form>
            <button onClick={this.handleSubmit} className="ui fluid large teal submit button">Submit</button>
          </div>
        </div>
      </div>

    );
  }

}


function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}

export default withRouter(withAuth(connect(mapStateToProps, actions)(PostForm)));


/* <label>
  Profile Pic:
  <input
    type="file"
    ref={input => {
      this.fileInput = input;
    }}
  />
</label>
<br/> */
