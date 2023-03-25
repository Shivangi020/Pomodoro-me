import React from "react";

function TimerSetting() {
  
  return (
  <div className="timer-setting-cn" style={{ transform: 'translateY(200px)'}}>
        <p>Set Time</p>
      <div className="timer-in">
        <label>Pomodoro :</label>
        <input type="number" min='10' max='120'></input>
      </div>
      <div className="timer-in">
        <label>Short Break :</label>
        <input type="number" min='5' max='15'></input>
      </div>
      <div className="timer-in">
        <label>Long Break :</label>
        <input type="number" min='15' max='30'></input>
      </div>
    </div>
  );
}

export default TimerSetting;
