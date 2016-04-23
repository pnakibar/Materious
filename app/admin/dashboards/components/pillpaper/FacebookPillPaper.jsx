import React from 'react'
import PillPaper from './PillPaper'
import {indigo500, indigo900} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

export default class FacebookPillPaper extends React.Component {
  render () {
    const likeIcon = this._generateLikeProperties()
    return (
      <div className='pillpaper-facebook'>
        <PillPaper
          colorLeft={indigo500}
          colorRight={indigo900}
          contentLeft={likeIcon.icon}
          contentRight={likeIcon.likes}/>
      </div>
    )

  }

  _numberToFormattedString (number) {
    if (number < 1000) {
      return number
    } else {
      return this._numberToFormattedString(Math.floor(number / 1000)) + 'k'
    }
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
      likes: (<span style={fontStyle}>{this.props.likes}</span>)
    }
}


}
