import React, { useContext} from 'react'
import ActionButton from './Button'
import {AiFillSetting} from 'react-icons/ai'
import { ModalContext } from '../Context/GlobalState'



function FooterButton({StartTimer,interval,StopTimer}) {
  const {openModal} = useContext(ModalContext)
  const {hours,minutes} = interval

 const timerAction = ()=>{
      StartTimer(hours,minutes)
 }



  
  return (
    <div className='footer-button' >
    <ActionButton tag='Start' btnAction={timerAction}/>
    <ActionButton tag='Pause' btnAction={StopTimer}/>
    <ActionButton tag='Reset'/>
    <AiFillSetting className='setting-btn' onClick={()=>openModal()}/>
</div>
  )
}

export default FooterButton