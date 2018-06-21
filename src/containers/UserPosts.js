import React from 'react';
// import Users from '../containers/Users'
// import UserDetail from './UserDetail'

import { Segment, Popup, Button } from 'semantic-ui-react'

class UserPosts extends React.Component {
  // state = {
  //   toggle: false
  // }

  // handleClick = () => {
  //   let newState = !this.state.toggle
  //   this.setState({
  //     ...this.state, toggle: newState
  //   })
  // }

  // hiddenDetails = () => {
  //   return <UserDetail user={this.props.user}/>
  // }


  displayPosts = () => {
    if (this.props.userPosts.length > 0) {
      return this.props.userPosts.map(post => {
        return (
         // <div>
          <Segment.Group raised className="user-segments">
            <Segment>
              <div className="content">
                <h2 className="header">{post.title}</h2>
                <div className="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
              </div>
              <div className="item">
               <div className="content">
                 <i className="star icon"></i> Topic: {post.topic}
               </div>
             </div>
              <div className="item">
                <div className="content">
                  <i className="pin icon"></i> {post.body}
                </div>
              </div>
              {/* {this.state.toggle ? this.hiddenDetails() : null}
              <button onClick={this.handleClick}>{this.state.toggle ? <i className="minus icon"></i> : <i className="plus icon"></i>}</button> */}
            </Segment>
          </Segment.Group>
        // </div>
      )})
    }
  }

  // displayPosts = () => {
  //   if (this.props.userPosts.length > 0) {
  //     return this.props.userPosts.map(post => {
  //       return <div className="card">
  //               <div className="content">
  //                 <div className="header">
  //                   {post.title}
  //                 </div>
  //                 <div className="meta">
  //                   {post.topic}
  //                 </div>
  //                 <div className="description">
  //                   {post.body}
  //                 </div>
  //               </div>
  //             </div>
  //     })
  //   }
  // }

  render() {
    return (
      <div >
        {this.displayPosts()}
      </div>
      );
  }
}


export default UserPosts
