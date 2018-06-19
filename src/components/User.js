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
      <div className="item user-list">
        {/* <img className="ui avatar image" src="/images/avatar2/small/rachel.png" /> */}
        <div className="content">
          <i className="big user circle icon"></i><a className="header">{this.props.user.name}</a>
          <div className="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
        </div>
        <div className="item">
         <div className="content">
           <i className="star icon"></i> Guru: {this.props.user.guru}
         </div>
       </div>
       <div className="item">
         <div className="content">
           <i className="pin icon"></i> Current Project: {this.props.user.project}
         </div>
       </div>
       {this.state.toggle ? this.hiddenDetails() : null}
       <button onClick={this.handleClick}>{this.state.toggle ? <i className="minus icon"></i> : <i className="plus icon"></i>}</button>
      </div>
      );
  }
}


export default User
