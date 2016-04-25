import React from 'react'
import PillPaper from './PillPaper'
import {red500, red900} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

export default class GooglePlusPillPaper extends React.Component {
  render () {
    const likeIcon = this._generateLikeProperties()
    return (
      <div className='pillpaper-google-plus'>
        <PillPaper
          colorLeft={red500}
          colorRight={red900}
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
      icon: (<FontIcon className='fa fa-google-plus' style={iconStyle} />),
      likes: (
        <div style={textBox}>
          Google Plus followers<br />
        <span style={{fontSize: '70px'}}>{this._numberToFormattedString(this.props.likes)}</span>
        </div>
      )
    }
}


}
