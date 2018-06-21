import React, { Component } from 'react'
import { Menu, Segment, Button, Container, Menue,  } from 'semantic-ui-react'
import {NavLink, withRouter } from 'react-router-dom';




class NavBar extends Component {
  state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <div className="nav-bar">
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'
        >
            {/* <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item> */}
            <Menu.Item position='right'>
              <Button style={{backgroundColor: "teal", opacity: "0.6", marginLeft: '0.5em' }} inverted={!fixed} primary={fixed} >
                <NavLink style={{color: "white"}} activeClassName="active" to="/">
                  Log Out
                </NavLink>
              </Button>
            </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar)
