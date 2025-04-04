import React from "react"
import './footer.css'


function footer ({produto, descrição}){
    return(
        <>
        <footer className="footer">
         <div className="footerimg">
             <img className="logo2" src="./icons8-bola-de-futebol-2-50 (1).png" alt="Logo"/>
             <p>Nos siga nas nossas redes sociais</p>
         </div>
         <div className="footericon">
             <img src="1466166 1.png" alt=""/><img src="20673 1.png" alt=""/><img
                 src="tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png 1.png" alt=""/><img src="8cxn5xrdi 1.png"
                 alt=""/>
         </div>
         <div className="footertexto">
             <p>Gleba Paiçandu - Lote 80 Zona Rural Ivatuba - PR</p>
         </div>
 
     </footer>
 
        </>
    )
}
export default footer