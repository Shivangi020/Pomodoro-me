import React from 'react'
import ActionButton from './Button'
import {AiFillSetting} from 'react-icons/ai'

function FooterButton() {
  return (
    <div className='footer-button'>
    <ActionButton tag='Start'/>
    <ActionButton tag='Pause'/>
    <ActionButton tag='Reset'/>
    <AiFillSetting className='setting-btn'/>
</div>
  )
}

export default FooterButton