import React, { useContext, useState} from 'react'
import ActionButton from './Button'
import { GlobalContext } from '../Context/GlobalState'


function HeaderButton({SetTimerByButton}) {
  const {timer} = useContext(GlobalContext)
  const {pomodoro, short_break, long_break} = timer
  const [activeButtonTag ,setActiveButtonTag] = useState('Pomodoro')
  
  const HeaderButtonData = [
    { tag: 'Pomodoro', time: pomodoro },
    { tag: 'Short Break', time: short_break },
    { tag: 'Long Break', time: long_break },
  ]
  
  const createTimerAction = (time,tag) => () => {
    SetTimerByButton(time,tag)
    setActiveButtonTag(tag)
  }

  return (
    <div className='header-button'>
      {
        HeaderButtonData.map((item,index)=>{
         return <ActionButton tag={item.tag} btnAction={createTimerAction(item.time,item.tag)} key={index} isActive={item.tag === activeButtonTag}/>
        })
      }
    </div>
  )
}

export default HeaderButton