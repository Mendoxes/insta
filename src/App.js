import React, { lazy,Suspense } from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import useAuthListner from './hooks/use-auth.listner'
import UserContext from "./context/user"


const Login = lazy(()=> 
import ("./pages/login")) //lazy render given component on demand aka svelte style
const SignUp = lazy(()=> import ("./pages/sign-up"))
const Dashboard = lazy(()=> import ("./pages/dashboard"))
const NotFound = lazy(()=> import ("./pages/not-found"))
function App() {

  const {user} = useAuthListner();
  return (
    <UserContext.Provider value ={{user}}>
   <Router>
     <Suspense fallback= //suspens works with it child "lazy" it will show the Loading... in a time lazy takes to render {login}
     {<p>Loading...</p>}> 
<Switch>
<Route path={ROUTES.LOGIN} component = {Login} exact/>
<Route path={ROUTES.SIGN_UP} component = {SignUp} exact/>
<Route path={ROUTES.DASHBOARD} component = {Dashboard} exact/>
<Route component = {NotFound}/>
</Switch>
</Suspense>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
