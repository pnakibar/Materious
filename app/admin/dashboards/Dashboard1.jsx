import React from 'react'
import {Row, Col} from 'react-flexbox-grid/lib/index'
import {Dashboard, DashboardCard} from './components/Dashboard'
import FontIcon from 'material-ui/FontIcon'

import Paper from 'material-ui/Paper'
import {indigo500, indigo900} from 'material-ui/styles/colors'
import PillPaper from './PillPaper'

export default class Dashboard1 extends React.Component {
  constructor (props) {
    super(props)
    const likesCount = 99

    this.state = {
      likesCount: likesCount,
      likesCountString: this._numberToFormattedString(likesCount),
    }
  }

  _numberToFormattedString (number) {
    if (number < 1000)
      return number
    else {
      return this._numberToFormattedString(Math.floor(number/1000)) + 'k'
    }
  }

        // {this._likeIcon()}
  render () {
    const likeIcon = this._generateLikeProperties()
    console.log(likeIcon)
    return (
      <Dashboard title={this.props.title}>
        <PillPaper
          colorLeft={indigo500}
          colorRight={indigo900}
          contentLeft={likeIcon.icon}
          contentRight={likeIcon.likes}/>
      </Dashboard>
    )
  }
  _generateLikeProperties () {
    const fontStyle = {
      color: '#FFFFFF',
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: 'normal',
      fontSize: '70px'
    }
    const iconStyle = {
        color: '#FFFFFF',
        fontSize: '110px',
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal'
    }

    return {
      icon: (<FontIcon className='material-icons' style={iconStyle} >thumb_up</FontIcon>),
      likes: (<span style={fontStyle}>{99}</span>)
    }
  }
}
