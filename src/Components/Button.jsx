import React from 'react'

function ActionButton({tag ,btnAction,isActive}) {
  return (
  <button className={`${isActive?'btn activeBtn':'btn'}`} onClick={()=>btnAction()} >{tag}</button>
  )
}

export default ActionButton