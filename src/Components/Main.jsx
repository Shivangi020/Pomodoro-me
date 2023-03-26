import React ,{useContext,useEffect}from 'react'
import Header from './Header'
import HeaderButton from './HeaderButton'
import TimerWindow from './TimerWindow'
import FooterButton from './FooterButton'
import Modal from './Modal'
import { GlobalContext } from '../Context/GlobalState'

function Main() {
    const {theme} = useContext(GlobalContext)
    const {dark,light} = theme
  
    useEffect(()=>{
      const root = document.documentElement;
      root.style.setProperty('--dark', dark);
      root.style.setProperty('--light', light);
    },[dark,light])
  
  return (
    <div className="main">
    <Header />
    <div className="container">
      <HeaderButton />
      <TimerWindow />
      <FooterButton />
      <Modal/>
    </div>
  </div>
  )
}

export default Main