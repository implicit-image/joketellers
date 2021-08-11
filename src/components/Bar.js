import React from 'react'
import './../styles/Bar.css'
import BarSection from './BarSection'

const Bar = ({ pageSetter }) => {
  return (
    <div className="bar">
      <BarSection text="About" pageSwitcher={() => pageSetter('about')} id='left'/>
      <BarSection text="Get the joke!" pageSwitcher={() => pageSetter('joke')} id='right'/>
    </div>

  )
}

export default Bar
