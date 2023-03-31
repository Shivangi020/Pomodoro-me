import React, { useState ,useContext} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import { Themes } from '../Theme'
import { ModalContext } from "../Context/GlobalState";

function ThemeSetting({themeSelectHandler}) {
    const [showList ,setShowList] = useState(false)
    const {translateVar} = useContext(ModalContext)
    const {measurement} = translateVar
    const [searchInput ,setSearchInput] = useState('')
   

    function searchableInput(e){
        setSearchInput(e.target.value)
    }

    function themeOption(theme){
      const {name,index} = theme
      themeSelectHandler(index)
      setSearchInput(name)
    }

  return (
    <div className='theme-setting-cn' style={{transform: `translateY(${0-measurement}px)`,transition:'transform .3s ease-out'}}>
        <p>Select theme color :</p>
        <div className='theme-in-cn'>  <input className='theme-in' value={searchInput} placeholder='Spring' onChange={(e)=>searchableInput(e)} onClick={()=>setShowList(true)}></input><span className='down-icon' onClick={()=>setShowList(!showList)} ><BiChevronDown /></span></div>
      <ul className={`${showList?'theme-list theme-list-show' :'theme-list '}`}>
       {
        Themes.filter((item)=>{
          if(searchInput===''){
            return item
          }else if (item.name.toLowerCase().includes(searchInput.toLowerCase())){
            return item
          }
        }).map((theme)=>{
          return <li key={theme.index} onClick={()=>themeOption(theme)}>{theme.name}</li>
        })
       }
      </ul>
    </div>
  )
}

export default ThemeSetting