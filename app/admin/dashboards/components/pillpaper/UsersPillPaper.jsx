import React from 'react'
import PillPaper from './PillPaper'
import {green500, green700} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

export default class UsersPillPaper extends React.Component {
  render () {
    const style = {
      fontSize: '100%'
    }
    const tdStyle = {
      textAlign: 'center'
    }
    const icon = (<FontIcon
      color={'#FFFFFF'}
      className='material-icons'
      style={style}>people</FontIcon>)
    return (
      <div className='pillpaper-users'>
        <PillPaper.Number
          iconBg={green500.toString()}
          contentBg={green700.toString()}
          title={'Total Users'}
          number={10}
          overrideIcon={icon}
        />
      </div>
    )
  }
}
