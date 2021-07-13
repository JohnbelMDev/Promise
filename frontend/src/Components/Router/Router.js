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

export default function RouterComponenet() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Campaignform">About</Link>
            </li>
            <li>
              <Link to="/Login">Users</Link>
            </li>
            <li>
              <Link to="/Viewdonation">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Campaignform">
            <CampaignForm />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Campaignform">
            <CampaignForm />
          </Route>

          <Route path="/Viewdonation">
            <Viewdonation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
