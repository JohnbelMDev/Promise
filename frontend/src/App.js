
import React from 'react'
import { BrowserRouter as  Route } from 'react-router-dom';
import Login from "./Components/Login/Login.js";

 
function App() {
  return(
  <Route exact path="/login">
  <Login />
</Route>
  )
}

export default App;
