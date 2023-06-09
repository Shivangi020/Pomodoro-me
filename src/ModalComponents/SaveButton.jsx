import React, { useContext } from 'react'
import ActionButton from '../Components/Button'
import { GlobalContext,ModalContext } from '../Context/GlobalState'
import { Themes } from '../Theme'

function SaveButton({actionState}) {
  const {themeSelect,timeSelect} = actionState
  const {saveChange} = useContext(GlobalContext)
  const {closeModal} = useContext(ModalContext)



  const saveChangeHandler = ()=>{
    const {dark ,light} = Themes[themeSelect]
    const {pomodoro ,short_break,long_break} = timeSelect
    const theme = {dark,light}
    const timer = {pomodoro ,short_break,long_break}
    localStorage.setItem('pomodoro',pomodoro)
    localStorage.setItem('short_break',short_break)
    localStorage.setItem('long_break',long_break)
    localStorage.setItem('dark',dark)
    localStorage.setItem('light',light)
    saveChange(theme,timer)
  }
  
  return (
    <div className='save-btn-cn'>
        <ActionButton tag='Close' btnAction={closeModal} styleClass='btn-hover'/>
        <ActionButton tag="Save Changes" btnAction={saveChangeHandler} styleClass='btn-hover'/>
    </div>
  )
}

export default SaveButton