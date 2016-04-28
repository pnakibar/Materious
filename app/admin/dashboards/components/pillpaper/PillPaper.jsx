import React from 'react'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import {grey500, grey200} from 'material-ui/styles/colors'
const {Grid, Row, Col} = require('react-flexbox-grid')

export default class PillPaper extends React.Component {
  render () {
    const paperStyle = {
      display: 'flex',
      minHeight: '90px',
      minWidth: '210px',
      width: '100%',
      background: this.props.contentBg || grey500
    }

    const contentStyle = {
      display: 'block',
      float: 'right',
      padding: '10px'
    }

    const iconStyle = {
      display: 'flex',
      float: 'left',
      height: '90px',
      width: '90px',
      //textAlign: 'center',
      //fontSize: '45px',
      //lineHeight: '90px',
      verticalAlign: 'middle',
      backgroundColor: this.props.iconBg || grey200
    }
    return (
        <Paper rounded={false} style={paperStyle} zDepth={2}>

          <span className='pillpaper-icon' style={iconStyle}>
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={6}>{this.props.icon}</Col>
                </Row>
              </Col>
            </Row>
          </span>
          <div
            className='pillpaper-content'
            style={contentStyle}>
            {this.props.content}
          </div>
        </Paper>
    )
  }
}
/*
PillPaper.propTypes = {
  content: React.propTypes.any,
  contentBg: React.propTypes.string,
  iconBg: React.propTypes.string,
  icon: React.propTypes.obj
}
*/

class PillPaperNumber extends React.Component {
  render () {
    console.log('opa')
    const {icon, content} = this._generateLikeProperties()
    return (
      <div className='pillpaper-number'>
        <PillPaper
          iconBg={this.props.iconBg}
          contentBg={this.props.contentBg}
          icon={icon}
          content={content}
          />
      </div>
    )
  }

  _numberToFormattedString (number) {
    if (number < 1000) {
      return number
    } else {
      return this._numberToFormattedString(Math.floor(number / 1000)) + 'k'
    }
  }
  _generateLikeProperties () {
    const textBox = {
      color: '#FFFFFF'
    }

    let returnObj = {
      icon: this.props.overrideIcon || (<FontIcon color={'#FFFFFF'} style={{fontSize: '50px'}} className={this.props.iconClass}/>),
      content: (
        <div style={textBox}>
          {this.props.title} <br />
        <span style={{fontSize: '30px'}}>{this._numberToFormattedString(this.props.number)}</span>
        </div>
      )
    }
    // if (this.props.overrideIcon) returnObj.icon = this.props.overrideIcon

    return returnObj
  }
}
/*
PillPaperNumber.propTypes = {
  iconClass: React.PropTypes.string,
  number: React.PropTypes.number,
  title: React.PropTypes.string,
  iconBg: React.PropTypes.string,
  contentBg: React.PropTypes.string,
  overrideIcon: React.propTypes.any
}
*/

PillPaper.Number = PillPaperNumber
