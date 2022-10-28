import React from "react";
import {header} from '../db/data'
import {  NavLink ,useLocation,useNavigate} from "react-router-dom";
import {Button} from './Button'
import {Logo} from './'

import {TemporaryDrawer} from './'
const Header = () => {
let navigate = useNavigate();
const location = useLocation();
console.log(location.pathname);
    return (
        <div className="flex    place-items-center gap-4 md:gap-0 md:justify-between mx-8  lg:mx-120 my-10 font-poppins"> 
       
        <TemporaryDrawer/>
           <Logo/>
            <div className="flex w-full  justify-end md:gap-6 lg:gap-10 xl:gap-74  place-items-center text-h16 text-grayscale-50 ">
                {header.map((item)=><NavLink   to={`/${item.to}`} key={item.name} className={({isActive})=>(isActive ||(item.to=='home'&&location.pathname==="/"))?'font-semibold hidden md:flex':'hidden md:flex'}>{item.name}</NavLink>)}

              
                <Button onClick={()=>navigate('contact')} >   
               Concate
                </Button>
            </div>
           
        </div>
       
    )
}

export default Header;