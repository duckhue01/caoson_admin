import firebase from "firebase/app"
import 'firebase/firestore'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/animate.min.css";
import "assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// pages
import Home from "./pages/home/Home";   
import Service from "./pages/service/Service";
import Store from "./pages/store/Store";
import Project from "./pages/projects/Project";
import Admin from './pages/admin/Admin'



// firebase init
firebase.initializeApp({
  apiKey: "AIzaSyAx-hUqn661JV7QBLSVVazGOeeqLNDNrm0",
  authDomain: "caosonn.firebaseapp.com",
  projectId: "caosonn"
});
const db  = firebase.firestore();



export const AppContext = React.createContext()


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const menuHandle = () => {
      setIsOpen(!isOpen)
      
  }


  return (
    <div className="font-extend01">
      <AppContext.Provider  value={{
        isMenuOpen: isOpen,
        menuHandle: menuHandle
      }} >
        <Router>        
            <Switch>
            <Route path="/" exact component={Home}>              
            </Route>
            <Route path="/service" exact component={Service}>            
            </Route>
            <Route path="/projects" exact component={Project}>          
            </Route>
            <Route path="/store" exact component={Store}>          
            </Route>
        
            <Route path="/admin" render={(props) => <Admin {...props} />} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </Router>                  
      </AppContext.Provider>
    </div>
  );
}

export default App;

