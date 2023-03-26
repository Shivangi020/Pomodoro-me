import React from "react";
import ThemeSetting from "./ThemeSetting";
import TimerSetting from "./TimerSetting";

function SettingWindow({ actionState }) {
  const {
    themeSelectHandler,
    pomodorTimeHandler,
    shortTimeHandler,
    longTimeHandler,
    timeSelect,
  } = actionState;

  return (
    <div className="setting-wn-cn">
      <ThemeSetting themeSelectHandler={themeSelectHandler} />
      <TimerSetting
        pomodorTimeHandler={pomodorTimeHandler}
        shortTimeHandler={shortTimeHandler}
        longTimeHandler={longTimeHandler}
        timeSelect={timeSelect}
      />
    </div>
  );
}

export default SettingWindow;
