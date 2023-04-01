import React from 'react'

function ActionButton({tag ,btnAction,isActive,styleClass}) {
  return (
  <button className={`${isActive?`btn activeBtn ${styleClass}`:`btn ${styleClass}`}`} onClick={()=>btnAction()} >{tag}</button>
  )
}

export default ActionButton