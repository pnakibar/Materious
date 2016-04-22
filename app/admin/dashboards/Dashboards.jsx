import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index'
import Paper from 'material-ui/lib/paper'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'

export default class Dashboards extends React.Component {
  render () {
    let tilesData = [
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-361390.jpg',
        title: 'Image 1',
        author: 'Motherfucker'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-364251.jpg',
        title: 'Image 2',
        author: 'Nigga'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-350916.jpg',
        title: 'Image 2',
        author: 'Bitch'
      }
    ]
    const text = `                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
    return (
      <div style={{margin: '20px'}}>
      <Row>
        {tilesData.map((e) => this._generateCard(e.title, text, e.img))}
      </Row>
      </div>
    )
  }

  _generateCard (title, text, img) {
    return (
      <Col lg={4}>
      <Card>
         <CardHeader title={title} />
         <CardMedia>
            <img src={img} />
         </CardMedia>
         <CardText>{text}</CardText>
      </Card>
      </Col>
     )
  }
}
