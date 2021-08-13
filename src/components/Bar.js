import React from 'react'
import './../styles/Bar.css'
import BarSection from './BarSection'

const Bar = ({ scroller }) => {
  return (
    <div className="bar">
      <BarSection text="About" pageSwitcher={() => scroller('article')} id='left'/>
    </div>

  )
}

export default Bar
