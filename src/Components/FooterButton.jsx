import React, { useContext } from 'react'
import ActionButton from './Button'
import {AiFillSetting} from 'react-icons/ai'
import { ModalContext } from '../Context/GlobalState'

function FooterButton() {
  const {openModal} = useContext(ModalContext)

  const changeColor = ()=>{
    const root = document.documentElement;
    root.style.setProperty('--dark', '#F40552');
    root.style.setProperty('--light', '#6886C5');
  }
  
  return (
    <div className='footer-button'>
    <ActionButton tag='Start'/>
    <ActionButton tag='Pause'/>
    <ActionButton tag='Reset'/>
    <AiFillSetting className='setting-btn' onClick={()=>openModal()}/>
</div>
  )
}

export default FooterButton