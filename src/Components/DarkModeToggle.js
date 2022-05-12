import React from 'react'

export default function DarkModeToggle(props) {

  
  return (
    <div className='container '>
         <div className="form-check form-switch my-3 ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              aria-checked="true"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
           style={{color: props.modetogglex==='light'?'black':'white' }} >
             <strong>
              Enable Dark Mode
             </strong>
              
            </label>
      </div>
      </div>
  )
}
