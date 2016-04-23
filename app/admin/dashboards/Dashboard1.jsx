import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import {Dashboard, DashboardCard} from './components/Dashboard'
import FontIcon from 'material-ui/FontIcon'

import Paper from 'material-ui/Paper'
import {indigo500, indigo900} from 'material-ui/styles/colors'

export default class Dashboard1 extends React.Component {
  constructor (props) {
    super(props)
    const likesCount = 99

    this.state = {
      likesCount: likesCount,
      likesCountString: this._numberToFormattedString(likesCount),
    }
  }
  
  _numberToFormattedString (number) {
    if (number < 1000)
      return number
    else {
      return this._numberToFormattedString(Math.floor(number/1000)) + 'k'
    }
  }

  render () {
    return (
      <Dashboard title={this.props.title}>
        {this._likeIcon()}
      </Dashboard>
    )
  }
  _likeIcon () {
    console.log(indigo500)
    const divStyle = {
      display: 'inline-block'
    }

    const style1 = {
      backgroundColor: indigo500,
      height: '120px',
      width: '120px',
      margin: -1,
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: '120px'
    }
    const style2 = {
      backgroundColor: indigo900,
      height: '120px',
      width: '120px',
      margin: -1,
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: '120px'
    }
    const fontStyle = {
      color: '#FFFFFF',
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: 'normal',
      fontSize: '70px'
    }
    const iconStyle = {
        color: '#FFFFFF',
        fontSize: '110px',
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal'
    }

    return (
      <Row>
        <Paper rounded={false} style={style1} zDepth={1}>
          <FontIcon className="material-icons" style={iconStyle}>thumb_up</FontIcon>
        </Paper>
        <Paper rounded={false} style={style2} zDepth={1} >
          <span style={fontStyle}>{this.state.likesCountString}</span>
        </Paper>
      </Row>
    )
  }
}
