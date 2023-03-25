import React, { useContext } from 'react'
import  { setTime } from '../Context/Functions'
import { GlobalContext } from '../Context/GlobalState'

function TimerWindow(){
  const {timer} = useContext(GlobalContext)
  const {pomodoro} = timer
  const {min,hour,second} = pomodoro
  const {hours,minutes} = setTime(min)
 
  return (
    <div className='timer-window'>
       <p><span>{hours>0 ? `${hours}:` : ''}</span><span>{minutes}</span>:<span>00</span></p>
    </div>
  )
}

export default TimerWindow