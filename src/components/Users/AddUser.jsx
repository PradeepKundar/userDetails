import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import css from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef, ageInputRef);

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty value)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Incalid Age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    // console.log(userName, userAge);

    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // setUserName("");
    // setUserAge("");
  };

  /*   const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
 */
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={css.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            // value={userName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={userAge}
            // onChange={userAgeChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
