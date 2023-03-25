import React , { useContext } from 'react'
import {VscChromeClose} from'react-icons/vsc'
import { ModalContext } from '../Context/GlobalState'

function Cross() {
  const {closeModal} = useContext(ModalContext)


  return (
    <div className='cross-cn' >
      <p>Settings</p>
      <VscChromeClose onClick={()=> closeModal()} className='cross-icon'/>
    </div>
  )
}

export default Cross