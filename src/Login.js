import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [utcode, setUtcode] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    const token = await loginUser({
      utcode,
      password
    });

    window.sessionStorage.setItem("id", JSON.stringify(utcode));

    setToken(token);
  }

  return(
    <>
      <body class="text-center">
        <main class="form-signin">
          <form onSubmit={handleSubmit}>
            <img class="mb-4" src={require("./login.png")} alt="cacib" width="122" height="67"/>
            <h4 class="h4 mb-3 fw-normal">Please sign in</h4>
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" onChange={e => setUtcode(e.target.value)} />
              <label for="floatingInput">UT Code</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" onChange={e => setPassword(e.target.value)} />
              <label for="floatingPassword">Password</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
          </form>
        </main>
      </body>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};