


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

    default:
      return { ...state };
  }
};

export default AppReducer;
