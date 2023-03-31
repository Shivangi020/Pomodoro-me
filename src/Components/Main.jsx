import React ,{useContext,useEffect, useState}from 'react'
import Header from './Header'
import HeaderButton from './HeaderButton'
import TimerWindow from './TimerWindow'
import FooterButton from './FooterButton'
import Modal from './Modal'
import { GlobalContext } from '../Context/GlobalState'
import { setTime } from '../Context/Functions'

function Main() {
    const {theme,timer} = useContext(GlobalContext)
    const {dark,light} = theme
    const {pomodoro, short_break, long_break} = timer
    const [timeRun ,setTimeRun] = useState('')
    const [interval,setIntervalRun] = useState({hours:0,minutes:pomodoro,second:0})
    let   [intervalId,setIntervalId] = useState(null)
    const [timerActive ,setTimerActive] = useState("Pomodoro")
  

    function StartTimer(hr,min) {
      console.log('start')
      console.log(intervalId)
      let hours = hr;
      let minutes = min;
      let seconds = 0;
      intervalId = setInterval(frame, 1000);
      setIntervalId(intervalId)
      let currentTime = ``
      function frame() {
        if (seconds === 0) {
          if (minutes === 0 && hours === 0) {
            clearInterval(intervalId);
            return;
          }
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            hours--;
            minutes = 59;
          }
        } else {
          seconds--;
        }
        currentTime = `${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        setTimeRun(currentTime)
      }
    }
    

  
    function SetTimerByButton(min,tag){
      console.log('timer button')
      if(intervalId){
        clearInterval(intervalId)
        setIntervalId(null)
      }

       const {hours,minutes,second} = setTime(min)
       setIntervalRun({...interval,hours,minutes,second})
       setTimeRun(`${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`)
       setTimerActive(tag)
     }


    const StopTimer = ()=>{
      console.log('stop')
     console.log(intervalId)
      if(intervalId){
        console.log(intervalId)
        clearInterval(intervalId)
        setIntervalId(null)
      }
    } 

    const ResetTimer = (hours,min)=>{
     console.log('reset')
     StopTimer()
     setIntervalRun({...interval,hours:hours,min:min})
     setTimeRun(`${hours<1?'':`${hours}:`}${min.toString().padStart(2, '0')}:${'00'}`)
    }

    useEffect(()=>{
      console.log('change theme')
      const root = document.documentElement;
      root.style.setProperty('--dark', dark);
      root.style.setProperty('--light', light);
    },[dark,light])


  useEffect(()=>{
    console.log('save changes')
    if(intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
    }
    if(timerActive==='Pomodoro'){
      const {hours,minutes,second} = setTime(pomodoro)
      setIntervalRun({...interval,hours,minutes,second})
      setTimeRun(`${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`)
    }else if(timerActive==='Short Break'){
      const {hours,minutes,second} = setTime(short_break)
      setIntervalRun({...interval,hours,minutes,second})
      setTimeRun(`${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`)
    }else{
      const {hours,minutes,second} = setTime(long_break)
      setIntervalRun({...interval,hours,minutes,second})
      setTimeRun(`${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`)
    }
 
  },[pomodoro,short_break,long_break])
    
    
  
  return (
    <div className="main">
    <Header />
    <div className="container">
      <HeaderButton SetTimerByButton={SetTimerByButton}/>
      <TimerWindow  timeRun={timeRun} interval={interval} />
      <FooterButton StartTimer={StartTimer} interval={interval} StopTimer={StopTimer} ResetTimer={ResetTimer}/>
      <Modal SetTimerByButton={SetTimerByButton}/>
    </div>
  </div>
  )
}

export default Main