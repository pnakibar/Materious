import React from 'react'
import TopNav from './TopNav/TopNav'
import LeftNav from './LeftNav/LeftNav'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.toggleLeftNav = this.toggleLeftNav.bind(this)
    this.closeLeftNav = this.closeLeftNav.bind(this)
    this.state = {
      leftNavOpen: false
    }
  }

  toggleLeftNav () {
    this.setState({leftNavOpen: !this.state.leftNavOpen})
  }
  closeLeftNav () {
    this.setState({leftNavOpen: false})
  }

  render () {
    console.log(TopNav.height)
    return (
      <div>
        <TopNav toggleLeftNav={this.toggleLeftNav} />
        <LeftNav dashboards={this.props.dashboards}
          isOpen={this.state.leftNavOpen}
          closeLeftNav={this.closeLeftNav}
          changeDashboard={this.props.changeDashboard}
        />
      </div>
    )
  }
}
