import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List';
import {pinkA200, transparent} from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import ActionGrade from 'material-ui/svg-icons/action/grade'


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
    const menuItemStyle = {
      'background-image': 'url(http://i.imgur.com/FDQjXxf.jpg)',
      'height': '200px'
    }
    const avatar = 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Nick-Fury-icon.png'
    return (
      <MenuItem
        style={menuItemStyle}
        primaryText="Nick Fury"
        leftIcon={<ActionGrade color={pinkA200} />}
        rightAvatar={<Avatar src={avatar} />}
      ></MenuItem>
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
