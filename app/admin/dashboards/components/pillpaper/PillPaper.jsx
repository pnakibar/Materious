import React from 'react'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import {grey500, grey200} from 'material-ui/styles/colors'

export default class PillPaper extends React.Component {
  render () {
    const styleInfobox = {
      display: 'block',
      minHeight: '90px',
      background: this.props.contentBg || grey200,
      width: '100%',
      marginBottom: '15px',
      color: '#FFFFFF'
    }
    const styleIcon = {
      borderTopLeftRadius: this.props.rounded? '2px' : 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: this.props.rounded? '2px' : 0,
      display: 'block',
      float: 'left',
      height: '90px',
      width: '90px',
      textAlign: 'center',
      fontSize: '45px',
      lineHeight: '90px',
      background: this.props.iconBg || grey500,
      color: '#FFFFFF'
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
    const overrideIcon = () => {
      if (this.props.overrideIcon)
        return this.props.overrideIcon
      else
        return (<i className={this.props.iconClassName}></i>)
    }
    return (
      <Paper style={styleInfobox} rounded={this.props.rounded} zDepth={3}>
        <div style={styleIcon}>{overrideIcon()}</div>
        <div style={styleContent}>
          <span style={styleText}>{this.props.title}</span>
          <span style={styleNumber}>{this.props.number}</span>
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
