import React, { useEffect } from 'react'


function TimerWindow({timeRun,interval}){

  const {hours,minutes,second} = interval

  
  return (
    <div className='timer-window'>
      <p>{timeRun|| `${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`}</p>
    </div>
  )
}

export default TimerWindow