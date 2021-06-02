import { useEffect } from "react";
import TimeLine from "../components/timeline"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

export default function Dashboard(){


    useEffect(()=>{
        document.title ="Instagram"
    },[]
    
    
    ); return(

<div className="bg-gray-background">
<Header />
<div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
<TimeLine/>
<Sidebar />

</div>

</div>

    )}