import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'

export default class DashboardGeneric extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const dashboardStyle = {
      'padding-top': '5px',
      'margin': '20px'
    }
    const titleStyle = {
      'font-size': '26px'
    }

    const subtitleStyle = {
      'font-size': '16px',
      'color': '#888888'
    }

    return (
      <div className='dashboard' style={dashboardStyle}>
        <Row>
          {this._renderTitle(titleStyle, this.props.title, 'title')}
          {this._renderTitle(subtitleStyle, this.props.subtitle, 'subtitle')}
        </Row>
        <Row>
          {this.props.children}
        </Row>
      </div>
    )
  }

  _renderGenericTitle (style, text, className) {
    if (text) {
      return (
        <Col className={className} style={style}>{text}</Col>
      )
    }
  }
}

DashboardGeneric.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.element.isRequired
}
