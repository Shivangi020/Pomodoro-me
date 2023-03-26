import React, { useContext, useEffect } from 'react'
import ActionButton from './Button'
import {AiFillSetting} from 'react-icons/ai'
import { ModalContext,GlobalContext } from '../Context/GlobalState'
import { Themes } from '../Theme'

function FooterButton() {
  const {openModal} = useContext(ModalContext)

 
  return (
    <div className='footer-button' >
    <ActionButton tag='Start'/>
    <ActionButton tag='Pause'/>
    <ActionButton tag='Reset'/>
    <AiFillSetting className='setting-btn' onClick={()=>openModal()}/>
</div>
  )
}

export default FooterButton