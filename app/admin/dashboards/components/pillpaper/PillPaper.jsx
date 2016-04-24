import React from 'react'
import {Row} from 'react-flexbox-grid/lib/index'
import Paper from 'material-ui/Paper'

export default class PillPaper extends React.Component {
  render () {
    const paperStyle = {
      height: '120px',
      width: '240px',
      display: 'inline-block'
    }
    const styleLeft = {
      backgroundColor: this.props.colorLeft,
      height: '120px',
      width: '120px',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: '120px'
    }
    const styleRight = {
      backgroundColor: this.props.colorRight,
      height: '120px',
      width: '120px',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: '120px'
    }



    return (
      <div className='paper-pill'>
        <Paper rounded={false} style={paperStyle} zDepth={1}>
          <div style={styleLeft}>{this.props.contentLeft}</div>
          <div style={styleRight}>{this.props.contentRight}</div>
        </Paper>
      </div>
    )
  }
}
