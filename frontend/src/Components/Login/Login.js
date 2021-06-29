import React, { Children, useState } from "react";
import {BrowserRouter as Router, Route, Link,Redirect,useLocation,history} from 'react-router-dom'
import { useHistory } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

const fakeAuth = {
  isAuthenticated:false,
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb,100)
  },
 signout(cb){
  this.isAuthenticated = false
  setTimeout(cb,100)
}
} 

function  PrivateRout({childen,...rest}){
  return (
    <Route {...rest} render={({location}) =>{
      return fakeAuth.isAuthenticated === true
      ? Children
      : <Redirect to = {{
        pathname:'/login',
        state: {from:location }
      }}/>
      

    }}>
     
    </Route>

  )
}

function Login(){
  const [
    redirectToReferre,
    setRedirectToReffer
  ] = React.useState(false)
 
  const {state} = useLocation()

   const login = () =>{
     fakeAuth.authenticate(() =>{
       setRedirectToReffer(true)
     })
   }

   if(redirectToReferre === true){
     return <Redirect to={state?.from || '/'}/>
   }
  return(
    <div>
    
    <p>You must log in to view</p>
    <button onClick = {login}>Login</button>
  </div>
  )
  
}

const Public = () => <h3> Public </h3>
const Protected = () => <h3> Protected </h3>
function AuthButton (){

  const history = useHistory()
  return fakeAuth.isAuthenticated === true 
  ? <p>
     Welcome!<button onCLick= {() => {
      fakeAuth.signout(()=> history.push('/'))

      }}> Sign out</button>
  </p>
  : <p>Your are not logged in</p>
}
export default function App (){
return(
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li> <Link to = "/public">Public Page</Link></li> 
        <li> <Link to = "/protected">Protected Page</Link></li> 

      </ul>

      <Route path="/public">
        <Public />
      </Route>

      <Route path="/login">
        <Login/>
      </Route>
    </div>
  </Router>

)
}