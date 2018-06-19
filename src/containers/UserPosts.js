import React from 'react';
// import Users from '../containers/Users'
// import UserDetail from './UserDetail'

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
        return <div className="card">
                <div className="content">
                  <div className="header">
                    {post.title}
                  </div>
                  <div className="meta">
                    {post.topic}
                  </div>
                  <div className="description">
                    {post.body}
                  </div>
                </div>
              </div>
      })
    }
  }




  render() {
    console.log("USER POSTS:", this.props.userPosts);
    return (
      <div className="ui cards user-list">
        {this.displayPosts()}
      </div>
      );
  }
}


export default UserPosts
