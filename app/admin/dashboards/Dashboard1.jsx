import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import {Dashboard, DashboardCard} from './components/Dashboard'
import FontIcon from 'material-ui/FontIcon'

import Paper from 'material-ui/Paper'
import {indigo500, indigo900} from 'material-ui/styles/colors'
import FacebookPillPaper from './components/pillpaper/FacebookPillPaper'
import GooglePlusPillPaper from './components/pillpaper/GooglePlusPillPaper'
import LinkedinPillPaper from './components/pillpaper/LinkedinPillPaper'

export default class Dashboard1 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const style = {
      margin: '10px'
    }
    return (
      <Dashboard title={this.props.title}>
        <Row>
          <Col style={style}><FacebookPillPaper likes={10} /></Col>
          <Col style={style}><GooglePlusPillPaper likes={10} /></Col>
          <Col style={style}><LinkedinPillPaper likes={10} /></Col>
        </Row>
      </Dashboard>
    )
  }
}
