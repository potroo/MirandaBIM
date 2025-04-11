import React from "react"
import './footer.css'


function footer (){
    return(
        <>
        <footer className="footer">
         <div className="footerimg">
             <img className="logo2" src="/imgs/fotobola.png" alt="Logo"/>
             <p>Nos siga nas nossas redes sociais</p>
         </div>
         <div className="footericon">
             <img src="/imgs/instagram.png" alt=""/>
             <img src="/imgs/face.png" alt=""/>
             <img src="/imgs/tiktok.png" alt=""/>
             <img src="/imgs/yt.png"alt=""/>
         </div>
         <div className="footertexto">
             <p>Gleba Paiçandu - Lote 80 Zona Rural Ivatuba - PR</p>
         </div>
 
     </footer>
 
        </>
    )
}
export default footer