import React, { useState ,useContext} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import { Themes } from '../Theme'
import { ModalContext } from "../Context/GlobalState";

function ThemeSetting({themeSelectHandler}) {
    const [showList ,setShowList] = useState(false)
    const {translateVar} = useContext(ModalContext)
    const {measurement} = translateVar
    // const [themeList ,setThe]


  return (
    <div className='theme-setting-cn' style={{transform: `translateY(${0-measurement}px)`,transition:'transform .3s ease-out'}}>
        <p>Select theme color :</p>
        <div className='theme-in-cn'>  <input className='theme-in'></input><span className='down-icon' onClick={()=>setShowList(!showList)} ><BiChevronDown /></span></div>
      <ul className={`${showList?'theme-list theme-list-show' :'theme-list '}`}>
       {
        Themes.map((theme)=>{
          return <li key={theme.index} onClick={()=>themeSelectHandler(theme.index)}>{theme.name}</li>
        })
       }
      </ul>
    </div>
  )
}

export default ThemeSetting