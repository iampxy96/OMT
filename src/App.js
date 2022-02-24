import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NewOnboardingEmployee from "./NewOnboardingEmployee";
import NavBar from "./NavBar";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {  

  const token = getToken();

  if(!JSON.parse(sessionStorage.getItem('id'))){
      return <Login setToken={setToken}/>
  }

  return (
  <>
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        {
          JSON.parse(sessionStorage.getItem('id')) === 'ut123' ?
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/newonboardingemployee" element={<NewOnboardingEmployee />}/>
              <Route path="/*" element={<Home />}/>
            </Routes>
          :
            JSON.parse(sessionStorage.getItem('id')) === 'ut111' ?  
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route></Route>
              </Routes>
            :
              sessionStorage.clear()
        }
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
