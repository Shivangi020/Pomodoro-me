import React, { useContext } from "react";
import { ModalContext } from "../Context/GlobalState";

function TimerSetting({
  pomodorTimeHandler,
  shortTimeHandler,
  longTimeHandler,
  timeSelect,
}) {
  const { translateVar } = useContext(ModalContext);
  const { measurement } = translateVar;
  const { pomodoro, short_break, long_break } = timeSelect;

  return (
    <div
      className="timer-setting-cn"
      style={{
        transform: `translateY(${200 - measurement}px)`,
        transition: "transform .3s ease-out",
      }}
    >
      <p>Set Time</p>
      <div className="timer-in">
        <label>Pomodoro :</label>
        <input
          name='pomodoro'
          type="number"
          min="10"
          max="120"
          onChange={(e) => pomodorTimeHandler(e)}
          value={pomodoro}
        ></input>
      </div>
      <div className="timer-in">
        <label>Short Break :</label>
        <input
        name="short_break"
          type="number"
          min="5"
          max="15"
          onChange={(e) => shortTimeHandler(e)}
          value={short_break}
        ></input>
      </div>
      <div className="timer-in">
        <label>Long Break :</label>
        <input
        name='long_break'
          type="number"
          min="15"
          max="30"
          onChange={(e) => longTimeHandler(e)}
          value={long_break}
        ></input>
      </div>
    </div>
  );
}

export default TimerSetting;
