import React,{useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
  
    const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //console.log(nameInputRef.current.value);
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title : 'Invalid Input',
        message : 'Please enter valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredUserAge < 1) { 
      setError({
        title : 'Invalid Age',
        message : 'Please enter valid age (Age > 0).'
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    //console.log(enteredUserName, enteredAge);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
    {error && <ErrorModel title={error.title} message={error.message} onConfirmError={errorHandler}/>}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef}/>
        <Button type="submit"> Add User</Button>
        {/* <button type="submit">Add User</button> */}
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
