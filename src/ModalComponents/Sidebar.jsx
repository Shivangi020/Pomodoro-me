import React, { useContext, useState } from 'react'
import { ModalContext } from '../Context/GlobalState'
import { SettingOption } from '../SettingOption'


function Sidebar() {
  const {translateAction} = useContext(ModalContext)
  const [option ,setOption] = useState(SettingOption)


  const OptionClickHandler = (translateMsr,tag)=>{
    console.log(translateMsr,tag)
         const activeOption = option.map((item)=>{
        return {...item , isActive: item.tag === tag  }    
         })
         setOption(activeOption)
         translateAction(translateMsr)
  }
  return (
    <div className='sidebar-cn'>
       <ul className='sidebar-op'>
        {option.map((opt)=>{
          const {tag,isActive,translateMsr} = opt
          return <li onClick={()=>OptionClickHandler(translateMsr,tag)} key={tag} className={`${isActive?'active-btn':''}`}>{tag}</li>
        })}
       </ul>
    </div>
  )
}

export default Sidebar

// <li onClick={()=>translateAction(translateMsr)} key={tag} >{tag}</li>