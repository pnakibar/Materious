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
          <MenuItem onTouchTap={this.props.closeLeftNav}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.props.closeLeftNav}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    )
  }
}
