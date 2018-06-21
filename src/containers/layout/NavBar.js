import React, { Component } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'




export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="nav-bar">
      <Menu size='small'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>

          <Menu.Item>
            <Button primary>Sign Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}


{/* <div className='nav-bar'>
  <Menu pointing secondary>
    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

    <Menu.Menu position='right'>
      <Menu.Item
        name='logout'
        active={activeItem === 'logout'}
        onClick={this.handleItemClick}
      />
    </Menu.Menu>
  </Menu>
</div>
) */}
