import React from 'react'
import './userItem.css'
export default function UserItem(props) {
    return (
        <div className='userItem'>
            <h3>{props.name}</h3>
            <p>{props.age} Years Old</p>
        </div>
    )
}
