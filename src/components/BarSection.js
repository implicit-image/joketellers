import React from 'react'
import './../styles/BarSection.css'



const BarSection = ({ text, pageSwitcher, id }) => {
  return (

      <button
        id={id}
        className='barSection'
        onClick={pageSwitcher}
      >
        <h1>{text}</h1>
      </button>
  )

}

export default BarSection
