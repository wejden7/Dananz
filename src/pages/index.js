import React from 'react'
import { Outlet } from "react-router-dom";
import {Header,Footer} from "../component"

export {default as Home} from './Home'
export {default as About} from './About'
export {default as Services} from './Services'
export {default as Teams} from "./Teams"
export {default as Contact} from "./Contact"
const Index = () =>{

    return (
        <div>
            
            <Header/>
           
                <Outlet/>
                <Footer/>
           

        </div>
    )
}

export default Index;