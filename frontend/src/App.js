
import React from 'react'
import { BrowserRouter as  Route } from 'react-router-dom';
import Login from "./Components/Login/Login.js";
import CampaignForm from "./Components/Campaignform/Campaignform.js";

 function CampaignList(){
   const campaigns = ["campaign1", "campaign2"];
   return(
      <>
      <ul>
        {campaigns.map(c => <li>{c}</li>)}
      </ul>
  </>
   );
 }
function App() {
  return(
    <>
  <Route exact path="/login">
  <Login />
  <CampaignList/>
</Route>
<Route exact path="/campaignForm">
  <CampaignForm />
</Route>
</>

  )
}

export default App;




// https://codepen.io/danbuda/pen/gNYEdv
// https://www.youtube.com/watch?v=kByiWTWdpww&ab_channel=uidotdev