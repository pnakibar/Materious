import React from 'react'
import Nav from './navbar/Nav.jsx'
import Dashboards from './dashboards/Dashboards'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dashboards: [1, 2, 3]
    }
  }

  render () {
    return (
      <div>
        <Nav />
        <Dashboards />
      </div>
    )
  }
}
