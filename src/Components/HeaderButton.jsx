import React, { useContext } from 'react'
import ActionButton from './Button'
import { GlobalContext } from '../Context/GlobalState'

function HeaderButton() {
  const {headerButtonAction,timer} = useContext(GlobalContext)
  const {pomodoro, short_break, long_break} = timer


  const createTimerAction = (time) => () => {
    headerButtonAction(time)
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