import React from "react"
import './Header.css'


function Header (){
    return(
        <>
        <header className="header">
         <div className="img">
             <img className="logo" src="/imgs/fotobola.png"/>
         </div>
         <div>
             <ul className="ul">
                 <li>P.I Chuteiras</li>
             </ul>
         </div>
     </header>
        </>
    )
}
export default Header