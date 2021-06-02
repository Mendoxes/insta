import {useState, useEffect, useContext} from "react"
import FirebaseContext from "../context/firebase"

export default function useAuthListner(){
const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))
const {firebase} = useContext(FirebaseContext);

useEffect (()=>{
 const listener = firebase.auth().onAuthStateChanged((authUser)=>{
//if we have authorisated user we can get him into storage
    if (authUser){
        localStorage.setItem("authUser",JSON.stringify(authUser))
        setUser(authUser);
    }

    //when we dont have user: its clearing storage
    else{
        localStorage.removeItem("authUser");
        setUser(null);
    }
})


return ()=>listener();
},[firebase])
    return(
{user}
        
    )


}