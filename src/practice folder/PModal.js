import React from 'react'
import  ReactDOM  from 'react-dom'
const modal_style = {
    position: 'fixed',
    transform: 'translate(-50%,-50%)',
    left: '50%',
    top: '50%',
    zIndex: 999,
    border: '2px solid black',
    padding: '0.5rem',
    backgroundColor: 'yellow'
}
const Overlay_style = {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,0.81)'
}


export default function PModal({ open, onClose }) {
    if (!open) return null

    return ReactDOM.createPortal (
        <>
            <div style={Overlay_style}></div>
            <div style={modal_style}>
                <h1>Modal is open</h1>
                <h2>enter valid informations</h2>
                <button onClick={onClose}>Close Modal</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}
