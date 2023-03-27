import { setTime } from "./Functions";


const AppReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_CHANGE":
      const { dark, light } = action.payload.theme;
      const { pomodoro, short_break, long_break } = action.payload.timer;
      return {
        ...state,
        theme: { ...state.theme, dark: dark, light: light },
        timer: { ...state.timer, pomodoro, short_break, long_break },
      };

      case 'SET_TIME':
        let {hours , minutes} = setTime(action.payload)
        return {...state,start_time:{...state.start_time,minutes:minutes,hours:hours}}
    default:
      return { ...state };
  }
};

export default AppReducer;
