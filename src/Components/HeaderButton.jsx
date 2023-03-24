import React from 'react'
import ActionButton from './Button'

function HeaderButton() {
  return (
    <div className='header-button'>
         <ActionButton tag='Pomodoro'/>
         <ActionButton tag='Short Break'/>
         <ActionButton tag='Long Break'/>
    </div>
  )
}

export default HeaderButton