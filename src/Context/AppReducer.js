import {StartTimer,setTime} from "./Functions"

const AppReducer = (state , action) =>{
    const {timer} = state
    switch(action.type){
        case 'START' :
            let {hours,minutes} =  StartTimer(timer.pomodoro.min)
            return {...state , timer:{...state.timer ,pomodoro:{...timer.pomodoro,min :minutes , hour:hours }}}
        case 'CHANGE_THEME' :
            let {dark,light} = action.payload
            return{...state , theme:{...state.theme , dark:dark ,light:light}}
        default :
        return {...state}
    }
}

export default AppReducer