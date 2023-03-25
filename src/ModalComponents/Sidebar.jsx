import React, { useContext } from 'react'
import { ModalContext } from '../Context/GlobalState'


function Sidebar() {
  const {translateAction} = useContext(ModalContext)

  return (
    <div className='sidebar-cn'>
       <ul className='sidebar-op'>
        <li onClick={()=>translateAction(0)}>Themes</li>
        <li onClick={()=>translateAction(400)}>Timers</li>
       </ul>
    </div>
  )
}

export default Sidebar