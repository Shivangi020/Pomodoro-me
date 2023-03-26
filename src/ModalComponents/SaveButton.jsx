import React, { useContext } from 'react'
import ActionButton from '../Components/Button'
import { GlobalContext } from '../Context/GlobalState'
import { Themes } from '../Theme'

function SaveButton({actionState}) {
  const {themeSelect} = actionState
  const {saveChange} = useContext(GlobalContext)

  const saveChangeHandler = ()=>{
    const {dark ,light} = Themes[themeSelect]
    const theme = {dark,light}
    saveChange(theme)
  }
  
  return (
    <div className='save-btn-cn'>
        <ActionButton tag="Save Changes" btnAction={saveChangeHandler}/>
    </div>
  )
}

export default SaveButton