import React from 'react'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

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
