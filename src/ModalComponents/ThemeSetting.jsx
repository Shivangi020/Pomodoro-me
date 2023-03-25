import React, { useState } from 'react'
import {BiChevronDown} from 'react-icons/bi'
import { Themes } from '../Theme'


function ThemeSetting() {
    const [showList ,setShowList] = useState(false)
  return (
    <div className='theme-setting-cn'>
        <p>Select theme color</p>
        <div className='theme-in-cn'>  <input className='theme-in' ></input><span className='down-icon' onClick={()=>setShowList(!showList)}><BiChevronDown /></span></div>
      <ul className={`${showList?'theme-list theme-list-show' :'theme-list '}`}>
       {
        Themes.map((theme)=>{
          return <li key={theme.name}>{theme.name}</li>
        })
       }
      </ul>
    </div>
  )
}

export default ThemeSetting