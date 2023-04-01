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
    
    // Destructuring theme and timer from Global State
    const {dark,light} = theme
    const {pomodoro, short_break, long_break} = timer

    // timeRun will render on timer window
    const [timeRun ,setTimeRun] = useState('')
    const [interval,setIntervalRun] = useState({hours:0,minutes:pomodoro,second:0})
    let   [intervalId,setIntervalId] = useState(null)
    const [timerActive ,setTimerActive] = useState("Pomodoro")
  

    function StartTimer(hr,min) {
      console.log('start')
      let hours = hr;
      let minutes = min;
      let seconds = 0;
      const Id = setInterval(frame, 1000);
      setIntervalId(Id)
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
    
   function setTimer(timer){
    const {hours,minutes,second} = setTime(timer)
    setIntervalRun({...interval,hours,minutes,second})
    setTimeRun(`${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`)
   }
  
   function clearTimer(){
    if(intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
    }
   }

    function SetTimerByButton(min,tag){
       clearTimer()
       setTimer(min)
       setTimerActive(tag)
     }


    const StopTimer = ()=>{
          clearTimer()
    } 

    const ResetTimer = (hours,min)=>{
     clearTimer()
     setIntervalRun({...interval,hours:hours,min:min})
     setTimeRun(`${hours<1?'':`${hours}:`}${min.toString().padStart(2, '0')}:${'00'}`)
    }

// This useEffect will run everytime user changes theme
    useEffect(()=>{
      console.log('change theme')
      const root = document.documentElement;
      root.style.setProperty('--dark', dark);
      root.style.setProperty('--light', light);
    },[dark,light])


// This useEffect will run everytime user sets the new interval for pomodoro , short break or long break with condition which timer active
  useEffect(()=>{
    console.log('save changes')
    if(intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
    }
    if(timerActive==='Pomodoro'){
      setTimer(pomodoro)
    }else if(timerActive==='Short Break'){
        setTimer(short_break)
    }else{
      setTimer(long_break)
    }
  },[pomodoro,short_break,long_break])
    
    
  
  return (
    <div className="main">
    <Header />
    <div className="container">
      <HeaderButton SetTimerByButton={SetTimerByButton}/>
      <TimerWindow  timeRun={timeRun} interval={interval} />
      <FooterButton StartTimer={StartTimer} interval={interval} StopTimer={StopTimer} ResetTimer={ResetTimer}/>
      <Modal />
    </div>
  </div>
  )
}

export default Main