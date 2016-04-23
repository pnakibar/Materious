import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'

export class Dashboard extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const dashboardStyle = {
      'paddingTop': '5px',
      'margin': '20px'
    }
    const titleStyle = {
      'fontSize': '26px'
    }

    const subtitleStyle = {
      'fontSize': '16px',
      'color': '#888888'
    }
    const titleRowStyle = {
      padding: '10px'
    }

    return (
      <div className='dashboard' style={dashboardStyle}>
        <Row top='xs' style={titleRowStyle} >
          {this._renderGenericTitle(titleStyle, this.props.title, 'title' + '   ')}
          {this._renderGenericTitle(subtitleStyle, this.props.subtitle, 'subtitle')}
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
    return ''
  }
}
Dashboard.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.element.isRequired
}

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export class DashboardCard extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const style = {
      'marginBottom': '20px'
    }
    return (
      <Card initiallyExpanded={true} style={style}>
         <CardTitle
          title={this.props.title}
          actAsExpander={true}
          showExpandableButton={true}
         />
         <CardMedia expandable={true}>
            {this.props.media}
         </CardMedia>
         <CardText expandable={true}>{this.props.text}</CardText>
      </Card>
     )
  }
}
