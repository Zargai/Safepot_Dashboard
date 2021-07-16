import React from "react";
import { Route, Switch,BrowserRouter  } from "react-router-dom";
import App from "../Pages/App";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Safepotblogcomponent from "../Pages/safepotblogcomponent";
function Routes() {
    return (
        
           <Switch>
                <Route  path="/" exact ><App/> </Route>
                <Route path="/header" ><Header/> </Route>
                <Route path="/footer" ><Footer/> </Route>  
                <Route path="/safepotblogcomponent" ><Safepotblogcomponent/> </Route>  
           </Switch>
     
   
    );
  }
  
  export default Routes;
  