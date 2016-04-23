import React from 'react'
import {Row} from 'react-flexbox-grid/lib/index'
import Paper from 'material-ui/Paper'

export default class PillPaper extends React.Component {
  render () {
    const styleLeft = {
      backgroundColor: this.props.colorLeft,
      height: '120px',
      width: '120px',
      margin: -1,
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: '120px'
    }
    const styleRight = {
      backgroundColor: this.props.colorRight,
      height: '120px',
      width: '120px',
      margin: -1,
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: '120px'
    }

    return (
      <div className='paper-pill'>
        <Row>
          <Paper rounded={false} style={styleLeft} zDepth={1}>
            {this.props.contentLeft}
          </Paper>
          <Paper rounded={false} style={styleRight} zDepth={1} >
            {this.props.contentRight}
          </Paper>
        </Row>
      </div>
    )
  }
}
