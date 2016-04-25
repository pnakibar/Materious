import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import {Dashboard, DashboardCard} from './components/Dashboard'
import FontIcon from 'material-ui/FontIcon'

import Paper from 'material-ui/Paper'
import {indigo500, indigo900} from 'material-ui/styles/colors'
import FacebookPillPaper from './components/pillpaper/FacebookPillPaper'
import GooglePlusPillPaper from './components/pillpaper/GooglePlusPillPaper'
import LinkedinPillPaper from './components/pillpaper/LinkedinPillPaper'
import UsersPillPaper from './components/pillpaper/UsersPillPaper'

export default class Dashboard1 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const style = {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
    const elementStyle = {
      marginTop: '10px',
      marginBottom: '10px'
    }
    return (
      <Dashboard title={this.props.title}>
        <div className='dashboard-content' style={style}>
          <Row around='xs'>
            <Col xs style={elementStyle} ><FacebookPillPaper likes={1000} /></Col>
            <Col xs style={elementStyle} ><GooglePlusPillPaper likes={99999} /></Col>
            <Col xs style={elementStyle} ><LinkedinPillPaper likes={1200000} /></Col>
            <Col xs style={elementStyle} ><UsersPillPaper likes={100000} /></Col>
          </Row>
        </div>
      </Dashboard>
    )
  }
}
