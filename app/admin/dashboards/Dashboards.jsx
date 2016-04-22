import React from 'react'
import DashboardCard from './components/DashboardCard'
import {Row, Col} from 'react-flexbox-grid/lib/index'

export default class Dashboards extends React.Component {
  render () {
    const dashBoardName = this.props.dashBoardName? this.props.dashBoardName : 'Dashboard'
    const dashBoardSubtitle = this.props.dashBoardSubtitle? this.props.dashBoardSubtitle : 'The sample dashboard'
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
      }
    ]
    const tilesData2 = [
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


    const text = `                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
    return (
      <div style={{ margin: '20px' }}>
      <h1 className='dashboard-title'>{dashBoardName} <small>{dashBoardSubtitle}</small></h1>
      <Row>
        {tilesData1.map((e, index) =>
          <Col lg={4}>
            <DashboardCard key={index} title={e.title} media={<img src={e.img}/>} text={text} />
          </Col>)}
      </Row>
      <Row>
        {tilesData2.map((e, index) =>
          <Col lg={4}>
            <DashboardCard key={index} title={e.title} media={<img src={e.img}/>} text={text} />
          </Col>)}
      </Row>
      </div>
    )
  }
}
