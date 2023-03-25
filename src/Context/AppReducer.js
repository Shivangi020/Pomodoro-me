import {StartTimer,setTime} from "./Functions"

const AppReducer = (state , action) =>{
    const {timer} = state
    switch(action.type){
        case 'START' :
            let {hours,minutes} =  StartTimer(timer.pomodoro.min)
            return {...state , timer:{...state.timer ,pomodoro:{...timer.pomodoro,min :minutes , hour:hours }}}
        default :
        return {...state}
    }
}

export default AppReducer