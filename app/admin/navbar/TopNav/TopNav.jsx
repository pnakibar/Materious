import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class TopNav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <AppBar
        title='Materious'
        iconElementLeft={<IconButton onClick={this.props.toggleLeftNav}><MenuIcon/></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
      />
  ) }
}
TopNav.propTypes = {
  toggleLeftNav: React.PropTypes.func.required
}
