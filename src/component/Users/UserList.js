import React from 'react'
import Card from '../UI/Card'
import UserItem from './UserItem'
import './UserList.css'


export default function UserList(props) {
  return (
    <Card>
      <ul className='userList'>
        {
          props.users.map((user, index) => (
            <div key={index}>
           <UserItem age={user.age} name={user.name} /> 
            </div>
          ))
        }
      </ul>
  </Card>
  )
}
