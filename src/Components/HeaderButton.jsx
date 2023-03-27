import React, { useContext} from 'react'
import ActionButton from './Button'
import { GlobalContext } from '../Context/GlobalState'
import { setTime } from '../Context/Functions'

function HeaderButton() {
  const {setCurrentinterval,timer} = useContext(GlobalContext)
  const {pomodoro, short_break, long_break} = timer

  
  const createTimerAction = (time) => () => {
    const {hours,minutes} = setTime(time)
    const interval = {hours,minutes}
    setCurrentinterval(interval)
  }
  return (
    <div className='header-button'>
         <ActionButton tag='Pomodoro' btnAction={createTimerAction(pomodoro)}/>
         <ActionButton tag='Short Break' btnAction={createTimerAction(short_break)}/>
         <ActionButton tag='Long Break' btnAction={createTimerAction(long_break)}/>
    </div>
  )
}

export default HeaderButton