// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import Login from './Login'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// import appleDesk from '../assets/images/apple-desk.jpg'
// import appleDevices from '../assets/images/apple-devices2.jpg'
import workingTogether from '../assets/images/working-together.jpeg'
// import arrows from '../assets/images/lank-arrows.png'
import ScreenShot from '../assets/images/screen-shot.png'
import ScreenShotHeat from '../assets/images/screen-shot-heat2.png'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <div className="header-text">
  <Container text>
    <div id="head-text">
    <Header
      as='h1'
      content='The Shop'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        color: "#449994",
        opacity: "1",
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
    <Header
      as='h2'
      content='Make Anywhere a Co-Working Space'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        color: "#449994",
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    </div>
  </Container>
</div>
)



/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div className="home-banner">
          <Segment

            // inverted
            textAlign='center'
            vertical
          >
             {/* <Image src={appleDevices} style={{ maxHeight: 500, width: '100%', padding: '1em 0em'}} /> */}

            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                {/* <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item> */}
                <Menu.Item position='right'>
                  <Button style={{backgroundColor: "teal", opacity: "0.6"}} inverted={!fixed} >
                    <NavLink style={{color: "white"}} activeClassName="active" to="/login">
                    Log In
                    </NavLink>
                  </Button>
                  <Button style={{backgroundColor: "teal", opacity: "0.6", marginLeft: '0.5em' }} inverted={!fixed} primary={fixed} >
                    <NavLink style={{color: "white"}} activeClassName="active" to="/register">
                      Sign Up
                    </NavLink>
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
          </div>
        </Visibility>

        {children}

      </Responsive>

    )
  }
}



class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            {/* <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item> */}
          {/* <Menu.Item as='a'> */}
            <NavLink className="item" activeClassName="active" to="/login">Log in</NavLink>
          {/* </Menu.Item> */}
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 200, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </Responsive>
    )
  }
}


const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)



const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '5em 0em 0em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              WeWork Mobile - A co-working space wherever you set up shop
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              work better together blabla bla bla blabla
              happier together blabla bla bla blabla
              life is better together bla bla bla
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={workingTogether} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
      {/* <Image bordered rounded size='large' src={arrows} /> */}
      </Container>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: "teal" }}>
              "Profile"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Set up quick profile bla bla..........</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: "teal" }}>
              "Message Boards"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Connect with the people working around you and talk shop</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: "teal" }}>
              "Community"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              see the remote workers around you check their skellset and projects they are working on
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          Maps
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Maps Maps Maps Maps
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Log-in and see how many people are working remote in your area.catch
          Zoom out to see a heat map of the whole city and find the hotspots for working
          remote in your area.
        </p>
      </Container>
    </Segment>
    <Segment style={{ padding: '0em', marginBottom: '2em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Local Map"
            </Header>
            <Image src={ScreenShot} style={{width: "100%"}} rounded />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Heat Map"
            </Header>
            <Image src={ScreenShotHeat} style={{width: '100%'}} rounded />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});

export default withRouter(connect(mapStateToProps, null)(HomepageLayout));
