import React from 'react'
import {Row} from 'react-flexbox-grid/lib/index'
import Paper from 'material-ui/Paper'

export default class PillPaper extends React.Component {
  render () {

    const paperStyle = {
      display: 'flex',
      minHeight: '90px',
      minWidth: '210px',
      width: '100%',
      background: this.props.contentBg
    }

    const contentStyle = {
      display: 'block',
      float: 'right',
      padding: '10px'
    }

    const iconStyle = {
      display: 'block',
      float: 'left',
      height: '90px',
      width: '90px',
      textAlign: 'center',
      fontSize: '45px',
      lineHeight: '90px',
      backgroundColor: this.props.iconBg
    }
    return (
        <Paper rounded={false} style={paperStyle} zDepth={2}>
          <span className='pillpaper-icon' style={iconStyle}>
            {this.props.icon}
          </span>
          <div
            className='pillpaper-content'
            style={contentStyle}>
            {this.props.content}
          </div>
        </Paper>
    )
  }
  _applyCentralized (doOrNot, css) {
    if (doOrNot) {
      css.textAlign = 'center'
      css.lineHeight = '120px'
    }
    return css
  }
}
