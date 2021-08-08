import React from 'react';
import './App.css'
import Menu from './MyComponents/Menu';
import RouteContact from './MyComponents/RouteContact';
import RouteAbout from './MyComponents/RouteAbout';
import User from './MyComponents/User';
import Search from './MyComponents/Search';
// import Error from './MyComponents/Error';
import {Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
  <>
  <Menu/>
   <Switch>
            <Route exact path='/about' component={()=><RouteAbout p="about"/>}/>
            <Route exact path='/contact' component={()=><RouteContact p="contact"/>}/>
            <Route exact path='/user/:fname' component={()=><User/>}/>
            <Route exact path='/search' component={()=><Search/>}/>
            {/* <Route component={()=><Error/>}/> */}
            <Redirect to="/"/>
            
   </Switch>
  </>
  );
}

export default App;
