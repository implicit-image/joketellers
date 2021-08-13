import React from 'react'
import './../styles/BarSection.css'



const BarSection = ({ text, pageSwitcher, id }) => {
  return (
    <div className="barSection" id={id}>
      <button
        className="barLink"
        onClick={pageSwitcher}
      >
        <h1>{text}</h1>
      </button>
    </div>
     )

}

export default BarSection
