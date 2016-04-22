import React from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default class DashboardCard extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const style = {
      'margin-bottom': '20px'
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
