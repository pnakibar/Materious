import React from 'react'
import Nav from './navbar/Nav.jsx'
import Dashboard1 from './dashboards/Dashboard1'
import Dashboard2 from './dashboards/Dashboard2'
import MenuItem from 'material-ui/MenuItem'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import Avatar from 'material-ui/Avatar'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.changeDashboard = this.changeDashboard.bind(this)
    this._renderCurrentDashboard = this._renderCurrentDashboard.bind(this)
    this.state = {
      dashboards: [
        {
          name: 'Sample Dashboard',
          dashboard: () => <Dashboard1 title={'Sample Dashboard'} subtitle='The Sample'/>
        },
        {
          name: 'Epicness Dashboard',
          dashboard: () => <Dashboard2 title={'Epicness'} subtitle={'Simply epic'}/>
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
    // return this.state.dashboards[this.state.currentDashboard].dashboard()
  }
}
