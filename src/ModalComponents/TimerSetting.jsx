import React, { useContext } from "react";
import { ModalContext } from "../Context/GlobalState";

function TimerSetting() {
  const {translateVar} = useContext(ModalContext)
  const {measurement} = translateVar
  
  return (
  <div className="timer-setting-cn" style={{ transform: `translateY(${200-measurement}px)` ,transition:'transform .5s ease-in'}}>
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
