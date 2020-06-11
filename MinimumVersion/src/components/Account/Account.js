import React, {useState} from 'react';

const Account =() => {

    // here is where we keep track of the todo list
  const [users,updateUsers] = useState()

  // here is where we keep track of the values in the form
  const [userName,setUserName] = useState("")
  const [password, setPassword] = useState("")

  // this is the action when the submit button is pushed
  const addUser = (event) => {
    //console.log('adding user ')
    //console.dir(event)
    const users = {id:users.length, userName:userName, password:password, complete:false}
    //updateUsers(users.concat(users))
    document.getElementById('userName').value = ""
    setUserName("")
    document.getElementById('password').value = ""
    setPassword("")

    event.preventDefault()
  }

  // these are called when the form elements are modified
  const updateUserName = event => setUserName(event.target.value)
  const updatePassword = event => setPassword(event.target.value)


  return(
    <>
      <h1>To be an Ebay Killer</h1>
      <form onSubmit={addUser}>
      userName: <input type="text" id="userName" name="userName" onChange={updateUserName}/><br />
      password: <input type="text" id="password" name="password" onChange={updatePassword} /><br />
      <input type="submit" value="Confirm" />
      </form>
    </>
  );
}

export default Account;
