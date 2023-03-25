import React , { useContext } from 'react'
import {VscChromeClose} from'react-icons/vsc'
import { ModalContext } from '../Context/GlobalState'

function Cross() {
  const {closeModal} = useContext(ModalContext)


  return (
    <div className='cross-cn' >
      <VscChromeClose onClick={()=> closeModal()}/>
    </div>
  )
}

export default Cross