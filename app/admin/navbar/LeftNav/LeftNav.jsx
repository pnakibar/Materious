import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List';
import {pinkA200, transparent} from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import {Row, Col} from 'react-flexbox-grid/lib/index'



export default class LeftNavSimpleExample extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Drawer
          open={this.props.isOpen}
          docked={false}
          onRequestChange={() => this.props.closeLeftNav()}
        >

        {this._menuItemUser()}
        <List>
          {
            this.props.dashboards.map((e, index) => this._menuItem(e.name, index))
          }
        </List>
        </Drawer>
      </div>
    )
  }

  _menuItemUser () {
    const avatarStyle = {
      paddingLeft: '5x'
    }
    const userItemStyle = {
      backgroundImage: 'url(http://i.imgur.com/FDQjXxf.jpg)',
      padding: '10px',
      height: '44px'
    }

    const avatar = 'http://x.annihil.us/u/prod/marvel/i/mg/6/30/55957023b1edb/landscape_xlarge.jpg'
    return (
      <div
        className='user-box'
        style={userItemStyle}
      >
        <Row>
            <Col xs={3}>
              <Avatar style={avatarStyle} src={avatar} />
            </Col>
            <Col xs={9}>
              Username<br />
              email@domain.com
            </Col>
        </Row>
      </div>
    )
  }

  _menuItem (name, index) {
    const helper = () => {
      this.props.closeLeftNav()
      this.props.changeDashboard(index)
    }
    return (
      <ListItem
        key={index}
        onTouchTap={helper}
      >
        {name}
      </ListItem>
    )
  }
}
