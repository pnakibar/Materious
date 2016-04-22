import React from 'react'
import Nav from './navbar/Nav.jsx'
import Dashboards from './dashboards/Dashboards'
import Dashboard2 from './dashboards/Dashboard2'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.changeDashboard = this.changeDashboard.bind(this)
    this._renderCurrentDashboard = this._renderCurrentDashboard.bind(this)
    this.state = {
      dashboards: [
        {
          name: 'Sample Dashboard',
          dashboard: () => <Dashboards />
        },
        {
          name: 'Epicness Dashboard',
          dashboard: () => <Dashboard2 dashBoardName={'Epicness'} dashBoardSubtitle={''}/>
        }
      ],
      currentDashboard: 0
    }
  }

  render () {
    return (
      <div>
        <Nav dashboards={this.state.dashboards} changeDashboard={this.changeDashboard}/>
        {this._renderCurrentDashboard()}
      </div>
    )
  }

  changeDashboard (index) {
    const newState = this.state
    newState.currentDashboard = index
    this.setState(newState)
  }
  _renderCurrentDashboard () {
    return this.state.dashboards[this.state.currentDashboard].dashboard()
  }

}
