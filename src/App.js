import React, { lazy,Suspense } from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import * as ROUTES from "./constants/routes"

const Login = lazy(()=> 
import ("./pages/login")) //lazy render given component on demand aka svelte style

function App() {
  return (
   <Router>
     <Suspense fallback= //suspens works with it child "lazy" it will show the Loading... in a time lazy takes to render {login}
     {<p>Loading...</p>}> 
<Switch>
<Route path={ROUTES.LOGIN} component = {Login}/>

</Switch>
</Suspense>
   </Router>
  );
}

export default App;
