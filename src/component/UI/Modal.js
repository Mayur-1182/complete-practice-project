import React from 'react'
import './Modal.css'
export default function Modal(props) {
  return (
    <div className='backdrop' onClick={props.onConfirm}>
      <div className='modal'>
        <header>
          An Error Occured !
        </header>
        <div>
          <p>Something Went Wrong </p>
        </div>
        <button onClick={props.onConfirm}>
          Okay
        </button>
      </div>
    </div>
  )
}
