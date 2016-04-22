import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class LeftNavSimpleExample extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const navStyle = {
      marginTop: 64,
      height: (window.innerHeight - 64)
    }
    return (
      <div>
        <LeftNav style={navStyle} open={this.props.isOpen}>
          {
            this.props.dashboards.map((e, index) => this._menuItem(e.name, index))
          }
        </LeftNav>
      </div>
    )
  }

  _menuItem (name, index) {
    const helper = () => {
      this.props.closeLeftNav()
      this.props.changeDashboard(index)
    }
    return (
      <MenuItem
        onTouchTap={helper}
      >
        {name}
      </MenuItem>
    )
  }
}
