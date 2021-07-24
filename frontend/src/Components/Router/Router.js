import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CampaignForm from "../Campaignform/Campaignform";
import Login from "../Login/Login";
import Viewdonation from "../Viewdonation/Viewdonation";
import Stripe from "../Stripe/StripeContainer";


export default function RouterComponenet() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
           
            
            <li>
              <Link to="/Stripe">Stripe</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/Stripe" component={Stripe}> </Route>
        

        </Switch>
      </div>
    </Router>
  );
}
