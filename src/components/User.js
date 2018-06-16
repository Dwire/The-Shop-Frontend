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
    console.log("click", this.state.toggle)
  }

  hiddenDetails = () => {
    return <UserDetail user={this.props.user}/>
  }

  render() {
    console.log("userP:", this.props);
    return (
      <div className="ui eight wide column tiles">
        <h2>{this.props.user.name}</h2>
        <h5>Guru: {this.props.user.guru}</h5>
        <h5>Current Project: {this.props.user.project}</h5>
        {this.state.toggle ? this.hiddenDetails() : null}
        <button onClick={this.handleClick}>{this.state.toggle ? "Show Less" : "Show More"}</button>
      </div>
      );
  }
}

// render(){
//   // if(this.state.clicked === true) {
//     return (
//       <div className="ui eight wide column tiles" onClick={this.handleClick}>
//         <p> {this.props.name} </p>
//         <img src={this.props.url} alt="pig pic" />
//         {this.state.clicked ? this.hiddenDetails() : null}
//       </div>
//     )

export default User
