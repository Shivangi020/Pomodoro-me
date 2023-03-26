import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function TimerWindow(){
  const {timer} = useContext(GlobalContext)
  const {pomodoro,short_break,long_break} = timer
  console.log(pomodoro,short_break,long_break)
 
  return (
    <div className='timer-window'>
       {/* <p><span>{hours>0 ? `${hours}:` : ''}</span><span>{minutes}</span>:<span>00</span></p> */}
       <p>2:00:00</p>
    </div>
  )
}

export default TimerWindow