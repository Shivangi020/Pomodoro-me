import React, { useContext, useEffect, useState} from 'react'
import ActionButton from './Button'
import {AiFillSetting} from 'react-icons/ai'
import { ModalContext } from '../Context/GlobalState'
import {FaRedo} from 'react-icons/fa'


function FooterButton({StartTimer,interval,StopTimer,ResetTimer}) {
  const {openModal} = useContext(ModalContext)
  const {hours,minutes} = interval
  const [btntag ,setBtntag] = useState('Start')
 
  const timerAction = ()=>{
    if(btntag ==='Start'){
      StartTimer(hours,minutes)
      setBtntag('Pause')
    }else if(btntag ==='Pause'){
    StopTimer()
    setBtntag('Start')
    }
 }

 useEffect(()=>{
  console.log('c')
  setBtntag('Start')
 },[hours,minutes])

const ResetTimerAction = ()=>{
  console.log(hours,minutes)
  ResetTimer(hours,minutes)
}

  
  return (
    <div className='footer-button' >
    <ActionButton tag={btntag} btnAction={timerAction}/>
    <FaRedo className='reset-btn' onClick={ResetTimerAction}/>
    <AiFillSetting className='setting-btn' onClick={()=>openModal()}/>
</div>
  )
}

export default FooterButton