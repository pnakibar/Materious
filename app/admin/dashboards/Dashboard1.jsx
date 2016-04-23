import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import {Dashboard, DashboardCard} from './components/Dashboard'
import FontIcon from 'material-ui/FontIcon'

import Paper from 'material-ui/Paper'
import {indigo500, indigo900} from 'material-ui/styles/colors'
import FacebookPillPaper from './components/pillpaper/FacebookPillPaper'

export default class Dashboard1 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Dashboard title={this.props.title}>
        <FacebookPillPaper
          likes={10}/>
      </Dashboard>
    )
  }
}
