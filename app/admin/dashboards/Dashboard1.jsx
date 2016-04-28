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

import Chart from './components/Chart'

export default class Dashboard1 extends React.Component {
  _text () {
    const styleInfobox = {
      display: 'block',
      minHeight: '90px',
      background: '#fff',
      width: '100%',
      boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
      borderRadius: '2px',
      marginBottom: '15px'
    }
    const styleIcon = {
      borderTopLeftRadius: '2px',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: '2px',
      display: 'block',
      float: 'left',
      height: '90px',
      width: '90px',
      textAlign: 'center',
      fontSize: '45px',
      lineHeight: '90px',
      background: '#aa0000',
      color: 'white'
    }
    const styleContent = {
      padding: '5px 10px',
      marginLeft: '90px'
    }
    const styleText = {
      textTransform: 'uppercase',
      display: 'block',
      fontSize: '14px',
      whiteSspace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
    const styleNumber = {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '18px'
    }
    return (
      <div style={styleInfobox}>
        <div style={styleIcon}><i className="fa fa-users"></i></div>
        <div style={styleContent}>
          <span style={styleText}>Likes</span>
          <span style={styleNumber}>41,410</span>
        </div>
      </div>
    )

  }
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
    const paperStyle = {
      height: '500px',
      width: '676px',
      marginTop: '10px',
      marginBottom: '10px'
    }
    return (
      <Dashboard title={this.props.title}>
        <div className='dashboard-content' style={style}>
          <Row>
            <Col xs={4}>{this._text()}</Col>
            <Col xs={4}>{this._text()}</Col>
            <Col xs={4}>{this._text()}</Col>
            <Col xs={4}>{this._text()}</Col>
            <Col xs={4}>{this._text()}</Col>
            </Row>
          <Row>
            <Col xs style={elementStyle} ><FacebookPillPaper likes={1000} /></Col>
            <Col xs style={elementStyle} ><GooglePlusPillPaper likes={99999} /></Col>
            <Col xs style={elementStyle} ><LinkedinPillPaper likes={1200000} /></Col>
            <Col xs style={elementStyle} ><UsersPillPaper likes={100000} /></Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Chart />
            </Col>
          </Row>
        </div>
      </Dashboard>
    )
  }
}
