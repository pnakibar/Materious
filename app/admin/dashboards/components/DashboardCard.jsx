import React from 'react'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'

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
