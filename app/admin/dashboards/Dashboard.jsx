import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const dashboardStyle = {
      'padding-top': '5px'
    }
    return (
      <div className='dashboard' style={dashboardStyle}>
        <Row>
          <Col>{this.props.title || ''}</Col>
          <Col>{this.props.subTitle || ''}</Col>
        </Row>
        <Row>
          {this.props.children}
        </Row>
      </div>
    )
  }
}

Dashboard.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  children: React.PropTypes.element.isRequired
}
