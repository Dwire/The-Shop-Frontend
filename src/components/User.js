import React from 'react';
// import Users from '../containers/Users'
import UserDetail from './UserDetail'

class User extends React.Component {
  state = {
    toggle: false
  }

  handleClick = () => {
    let newState = !this.state.toggle
    this.setState({
      ...this.state, toggle: newState
    })
  }

  hiddenDetails = () => {
    return <UserDetail user={this.props.user}/>
  }

  render() {
    return (
      <div class="item user-list">
        {/* <img class="ui avatar image" src="/images/avatar2/small/rachel.png" /> */}
        <div class="content">
          <i class="big user circle icon"></i><a class="header">{this.props.user.name}</a>
          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
        </div>
        <div class="item">
         <div class="content">
           <i class="users icon"></i> Guru: {this.props.user.guru}
         </div>
       </div>
       <div class="item">
         <div class="content">
           <i class="marker icon"></i> Current Project: {this.props.user.project}
         </div>
       </div>
       {this.state.toggle ? this.hiddenDetails() : null}
       <button onClick={this.handleClick}>{this.state.toggle ? "Show Less" : "Show More"}</button>
      </div>
      );
  }
}


export default User
