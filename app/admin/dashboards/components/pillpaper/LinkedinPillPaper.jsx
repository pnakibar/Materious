import React from 'react'
import PillPaper from './PillPaper'
import {blue500, blue700} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

export default class LinkedinPillPaper extends React.Component {
  render () {
    return (
      <div className='pillpaper-linkedin'>
        <PillPaper
        />
      </div>
    )
  }
  /*

          colorLeft={blue500}
          colorRight={blue700}
          contentLeft={likeIcon.icon}
          contentRight={likeIcon.likes}
          centralizeLeft={true}
          */
}
