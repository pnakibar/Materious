import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'


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
          {
            this.props.dashboards.map((e, index) => this._menuItem(e.name, index))
          }
        </Drawer>
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
        key={index}
        onTouchTap={helper}
      >
        {name}
      </MenuItem>
    )
  }
}
