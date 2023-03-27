import React, { useContext, useEffect} from 'react'
import { setTime } from '../Context/Functions'
import { GlobalContext } from '../Context/GlobalState'

function TimerWindow(){
  const {start_time,timer,setCurrentinterval} = useContext(GlobalContext)
  const {pomodoro,short_break,long_break} = timer
  const {hours,minutes,second} = start_time

  useEffect(()=>{
   const {hours,minutes} = setTime(pomodoro)
   const interval = {hours,minutes}
    setCurrentinterval(interval)
  },[pomodoro,short_break,long_break])
 
 
  return (
    <div className='timer-window'>
       <p><span>{hours>0 ? `${hours}:` : ''}</span><span>{minutes}</span>:<span>{second}</span></p>
      
    </div>
  )
}

export default TimerWindow