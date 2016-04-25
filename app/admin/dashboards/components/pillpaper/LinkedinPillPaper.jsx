import React from 'react'
import PillPaper from './PillPaper'
import {blue500, blue700} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

export default class LinkedinPillPaper extends React.Component {
  render () {
    const likeIcon = this._generateLikeProperties()
    return (
      <div className='pillpaper-linkedin'>
        <PillPaper
          colorLeft={blue500}
          colorRight={blue700}
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
      icon: (<FontIcon className='fa fa-linkedin-square' style={iconStyle} />),
      likes: (
        <div style={textBox}>
          Linkedin followers <br />
        <span style={{fontSize: '70px'}}>{this._numberToFormattedString(this.props.likes)}</span>
        </div>
      )
    }
}


}
