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
    const [interval,setIntervalRun] = useState({hours:0,minutes:25,second:0})
    let [intervalId,setIntervalId] = useState(null)
    

    function StartTimer(hr,min) {
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
    
    function SetTimerByButton(min){
      if(intervalId){
        clearInterval(intervalId)
        setIntervalId(null)
      }
       const {hours,minutes,second} = setTime(min)
       setIntervalRun({...interval,hours,minutes,second})
       setTimeRun(`${hours<1?'':`${hours}:`}${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`)
       intervalId = null; 
     }


    const StopTimer = ()=>{
      if(intervalId){
        clearInterval(intervalId)
        setIntervalId(null)
      }
    } 
    useEffect(()=>{
      const root = document.documentElement;
      root.style.setProperty('--dark', dark);
      root.style.setProperty('--light', light);
    },[dark,light])

    useEffect(()=>{
      SetTimerByButton(pomodoro)
    },[pomodoro, short_break, long_break])

    useEffect(()=>{
      console.log('a')
      localStorage.setItem('dark',dark)
      localStorage.setItem('light',light)
    },[dark,light])

    useEffect(()=>{
      console.log('b')
      localStorage.setItem('pomodoro',pomodoro)
      localStorage.setItem('short_break',short_break)
      localStorage.setItem('long_break',long_break)
    },[pomodoro, short_break, long_break])
  
  return (
    <div className="main">
    <Header />
    <div className="container">
      <HeaderButton SetTimerByButton={SetTimerByButton}/>
      <TimerWindow  timeRun={timeRun}/>
      <FooterButton StartTimer={StartTimer} interval={interval} StopTimer={StopTimer}/>
      <Modal/>
    </div>
  </div>
  )
}

export default Main