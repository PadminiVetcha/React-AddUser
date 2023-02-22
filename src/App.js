import React,{useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList] =useState([]);

  const addUserHandler = (uName, uAge) => {
      setUsersList((prevUserList) => {
        return [...prevUserList, {id : Math.random.toString() ,name:uName, age: uAge}];
      });
  };

  return (
    <React.Fragment>
       <AddUser onAddUser={addUserHandler}/>
       <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
