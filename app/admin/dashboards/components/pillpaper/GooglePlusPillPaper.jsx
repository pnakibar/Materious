import React from 'react'
import PillPaper from './PillPaper'
import {red500, red900} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

export default class GooglePlusPillPaper extends React.Component {
  render () {
    return (
      <div className='pillpaper-google-plus'>
        <PillPaper.Number
          iconBg={red500}
          contentBg={red900}
          iconClass='fa fa-google-plus-square'
          title={'Google+ Followers'}
          number={10}
          />
      </div>
    )

  }
}
