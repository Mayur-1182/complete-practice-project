import React, { useRef, useState } from 'react'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import './AddUser.css'


const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('')
    const [enterdAge, setEnterdAge] = useState('')
    const [valid, setvalid] = useState(false)

    function userNameChangeHandler(event) {
        setEnteredName(event.target.value)
    }

    function ageChangeHandler(event) {
        setEnterdAge(event.target.value)
    }

    function addUserhandler(event) {
        event.preventDefault()

        if (enterdAge.trim().length === 0 || enteredName.trim().length === 0) {
            setvalid(true)
            return
        }
        if (+enterdAge < 1) {
            setvalid(true)
            return
        }
        props.getUser({ name: enteredName, age: enterdAge })
        setEnterdAge('')
        setEnteredName('')
    }
    const erroHandler = () => {
        setvalid(false)
    }

    return (

        <Card>
            {
                valid ? <Modal onConfirm={erroHandler} /> : ''
            }
            <form onSubmit={addUserhandler}>
                <div className="username">
                    <label htmlFor='username'>UserName</label>
                    <input type="text"
                        id='username'
                        onChange={userNameChangeHandler}
                        value={enteredName}
                    />
                </div>
                <div className="age">
                    <label htmlFor="age">Age</label>
                    <input type="number" id='age' onChange={ageChangeHandler} value={enterdAge} min='0'

                    />
                </div>
                <button type='submit' className='addBtn'>Add User</button>
            </form>

        </Card>
    )
}

export default AddUser
