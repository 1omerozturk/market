import { CardCount } from "./CardCount"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"
import React from "react";


const Navbar:React.FC = () => {
  return (
    <div id="start" className="text-slate-100 sticky-top flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 bg-indigo-600">
        
        <Logo/>
        <Search/>
        <CardCount/>
        <User/>
        <HamburgerMenu/>
        </div>
  )
}

export default Navbar