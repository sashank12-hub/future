import React, { Component,useState,useEffect } from 'react'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import List from './list'
import Chat from './Chat'


import Search from './Search'

const App = () => {
  return (
    <>
    
  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={Search}/>
  <Route exact path='/content/' render ={(props) => <List {...props} />
  }/>
  </Switch>
  
  </BrowserRouter>
  
    </>
  )
}

export default App;










// import logo from './logo.svg';
// import './App.css';
// import Search from './search';
// import Checkout from './Checkout'
// import axios from 'axios';
// import React, { Component,useState,useEffect } from 'react';
// import Books from './Books';
// import  Pagination  from './Pagination';
// import {  First} from './first';
// import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
// import Header from "./Header"
// import Details from "./Details"
// function App() {




//   return ( <>
//     <BrowserRouter >





//     <Switch>
//     <Route exact path="/ecs" component={First } />
//     <Route exact path="/ecs/checkout" component={Checkout}/>
//     <Route exact path="/ecs/search" component={Search}/>
//     <Route exact path="/ecs/details/:id" render={(props)=><Details {...props}/>

//   }
//   />


//    </Switch>
//    </BrowserRouter>
//   </> );








//   }





// export default App;
