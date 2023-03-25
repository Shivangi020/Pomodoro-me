import React from 'react'

import ThemeSetting from './ThemeSetting'
import TimerSetting from './TimerSetting'

function SettingWindow() {
  return (
    <div className="setting-wn-cn">
      <ThemeSetting/>
      <TimerSetting/>
    </div>
  )
}

export default SettingWindow