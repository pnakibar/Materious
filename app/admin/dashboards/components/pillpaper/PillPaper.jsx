import React from 'react'
import {Row} from 'react-flexbox-grid/lib/index'
import Paper from 'material-ui/Paper'

export default class PillPaper extends React.Component {
  render () {

    const paperStyle = {
      height: '120px',
      width: '310px'
    }

    const styleLeft = this._applyCentralized(
      this.props.centralizeLeft || false,
      {
        backgroundColor: this.props.colorLeft,
        height: paperStyle.height,
        width: '120px',
        display: 'block',
        float: 'left'
      }
    )
    const styleRight = this._applyCentralized(
      this.props.centralizeRight || false,
      {
        backgroundColor: this.props.colorRight,
        height: paperStyle.height,
        width: parseInt(paperStyle.width) - 120 + 'px',
        display: 'block',
        float: 'right'
      }
    )

    return (
      <div className='paper-pill' style={{display:'block', position:'relative', display: 'flex'}}>
        <Paper rounded={false} style={paperStyle} zDepth={3}>
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
