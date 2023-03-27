import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function TimerWindow(){
  const {start_time} = useContext(GlobalContext)
  console.log(start_time)
 
  return (
    <div className='timer-window'>
       {/* <p><span>{hours>0 ? `${hours}:` : ''}</span><span>{minutes}</span>:<span>00</span></p> */}
       <p>2:00:00</p>
    </div>
  )
}

export default TimerWindow