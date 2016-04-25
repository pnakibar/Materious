import React from 'react'
import {Row} from 'react-flexbox-grid/lib/index'
import Paper from 'material-ui/Paper'

export default class PillPaper extends React.Component {
  render () {

    const paperStyle = {
      height: '120px',
      width: '320px'
    }

    const styleLeft = this._applyCentralized(
      this.props.centralizeLeft || false,
      {
        backgroundColor: this.props.colorLeft,
        height: '120px',
        width: '120px',
        display: 'block',
        float: 'left'
      }
    )
    const styleRight = this._applyCentralized(
      this.props.centralizeRight || false,
      {
        backgroundColor: this.props.colorRight,
        height: '120px',
        width: '200px',
        display: 'block',
        float: 'right'
      }
    )

    return (
      <div className='paper-pill'>
        <Paper rounded={false} style={paperStyle} zDepth={1}>
          <div style={styleLeft}>{this.props.contentLeft}</div>
          <div style={styleRight}>{this.props.contentRight}</div>
        </Paper>
      </div>
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
