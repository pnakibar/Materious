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
          contentRight={likeIcon.likes}
          centralizeLeft={true}
          />
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
    const textBox = {
      color: '#FFFFFF',
      verticalAlign: 'middle',
      lineHeight: 'normal',
      padding: '10px'
    }
    const iconStyle = {
        color: '#FFFFFF',
        fontSize: '80px',
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal'
    }

    return {
      icon: (<FontIcon className='fa fa-thumbs-o-up' style={iconStyle} />),
      likes: (
        <div style={textBox}>
          Facebook likes <br />
          <span style={{fontSize: '70px'}}>{this._numberToFormattedString(this.props.likes)}</span>
        </div>
      )
    }
}


}
