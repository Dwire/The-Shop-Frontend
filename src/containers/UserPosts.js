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
        return <div class="card">
                <div class="content">
                  <div class="header">
                    {post.title}
                  </div>
                  <div class="meta">
                    {post.topic}
                  </div>
                  <div class="description">
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
