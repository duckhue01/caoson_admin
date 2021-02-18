import firebase from "firebase/app"
import 'firebase/firestore'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




// pages
import Home from "./pages/home/Home";   
import Service from "./pages/service/Service";
import Store from "./pages/store/Store";
import Project from "./pages/projects/Project";
import Manager from "./pages/manager/Manager";



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
            <Route path="/manager" exact component={Manager}>          
            </Route>
          </Switch>
        </Router>                  
      </AppContext.Provider>
    </div>
  );
}

export default App;

