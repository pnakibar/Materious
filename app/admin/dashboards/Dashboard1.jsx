import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import {Dashboard, DashboardCard} from './components/Dashboard'

export default class Dashboard1 extends React.Component {
  render () {
    const tilesData1 = [
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-361390.jpg',
        title: 'Image 1',
        author: 'Author 1'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-46230.jpg',
        title: 'Image 2',
        author: 'Author 2'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-350916.jpg',
        title: 'Image 3',
        author: 'Author 3'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-75602.jpg',
        title: 'Image 4',
        author: 'Author 4'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-70126.jpg',
        title: 'Image 5',
        author: 'Author 5'
      },
      {
        img: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-21732.jpg',
        title: 'Image 6',
        author: 'Author 7'
      }
    ]

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
    const rowStyle = {
      '-webkit-justify-content': 'space-between',
      'justify-content': 'space-between'
    }
    return (
      <Dashboard title={this.props.title}>
        <div className='1'>
          <Row style={rowStyle}>
            {tilesData1.map((e, i) =>
              <Col xs={6} sm={3} md={2}>
                <div key={i}>
                  <DashboardCard title={e.title} media={<img src={e.img}/>} text={text}/>
                </div>
              </Col>
            )}
            {tilesData1.map((e, i) =>
              <Col xs={6} sm={3} md={2}>
                <div key={i}>
                  <DashboardCard title={e.title} media={<img src={e.img}/>} text={text}/>
                </div>
              </Col>
            )}
          </Row>
        </div>
      </Dashboard>
    )
  }
}
/*
Dashboard1.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
}
*/
