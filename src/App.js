import { useState } from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App(props) {
  const [userlist, setUserList] = useState([])
  function getuser(data) {
    setUserList((pre) => {
      const update = [...pre]
      update.unshift(data)
      return update 
    }) 
  }

  return (
    <div>
        <AddUser getUser={getuser} />
        <UserList users={userlist} />
    </div>
  );
}

export default App;

