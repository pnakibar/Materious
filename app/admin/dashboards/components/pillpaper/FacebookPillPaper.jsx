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
          iconBg={indigo500}
          contentBg={indigo900}
          icon={likeIcon.icon}
          content={likeIcon.likes}
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
      color: '#FFFFFF'
    }

    return {
      icon: (<FontIcon color={'#FFFFFF'} style={{fontSize: '50px'}} className='fa fa-thumbs-o-up'/>),
      likes: (
        <div style={textBox}>
          Facebook likes <br />
        <span style={{fontSize: '30px'}}>{this._numberToFormattedString(this.props.likes)}</span>
        </div>
      )
    }
}


}
