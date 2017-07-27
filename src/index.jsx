import React from "react";
import {render} from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"
import './index.css'
import User from "./User"

const App = () => {
    return(
     
      <BrowserRouter>
        <Route path="/" exact component={User}></Route>
      </BrowserRouter>
   
    )
}

render(<App/>, document.getElementById("app"))