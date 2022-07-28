import React from "react";
import NavBar from './NavBar'
class Header extends React.Component{
    render(){
        return(
         <>
        <div className='headerComp'>
            <NavBar/>
           <h1>Horned Animals</h1>

            </div>     
         </>
        )
    }
}

export default Header;