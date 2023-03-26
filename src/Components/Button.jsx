import React from 'react'

function ActionButton({tag ,btnAction}) {
  return (
  <button className='btn' onClick={()=>btnAction()}>{tag}</button>
  )
}

export default ActionButton