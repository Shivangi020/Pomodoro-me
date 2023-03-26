import React, { useEffect } from 'react'

import ThemeSetting from './ThemeSetting'
import TimerSetting from './TimerSetting'

function SettingWindow({actionState}) {
  const {themeSelectHandler} = actionState
 
  return (
    <div className="setting-wn-cn">
      <ThemeSetting themeSelectHandler={themeSelectHandler}/>
      <TimerSetting/>
    </div>
  )
}

export default SettingWindow