import React, {useState} from 'react';
import './App.css';
import Adduser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {  
const [usersList, setUsersList]  = useState([]);
const addUsersHandler= (userName, userAge) => {
  setUsersList((prevUsersListt) => {
    return [...prevUsersListt, {name : userName, age: userAge, id:Math.random().toString()}];
  });
}

  return <div>    
     <Adduser onAddUser = {addUsersHandler}/> 
     <UsersList users={usersList} />  
  </div>
};

export default App;
