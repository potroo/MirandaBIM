import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <header class="header">
         <div class="img">
             <img class="logo" src="./icons8-bola-de-futebol-2-50 (1).png">
         </div>
         <div>
             <ul class="ul">
                 <li>P.I Chuteiras</li>
             </ul>
         </div>
     </header>
 
     <div class="foto">
         <p class="fototexto">AS MELHORES<br>
             CHUTEIRAS</p>
     </div>
 
     <div class="container">
         <div class="item">
             <img src="./dfef460d-7ac8bf0fcebb8b513417112433340391-1024-1024.jpeg" alt="React Gato">
             <div class="preço">R$899,00</div>
             <h5>React Gato</h5>
         </div>
 
 
         <div class="item">
             <img src="./2IA-9046-979_zoom2.webp" alt="Umbro Pro 5">
             <div class="preço">R$ 649,99</div>
             <h5>Umbro Pro 5</h5>
         </div>
         <div class="item">
             <img src="./177217-800-auto.webp" alt="Joma Ferrão">
             <div class="preço">R$ 696,57</div>
             <h5>Joma Ferrão</h5>
         </div>
         <div class="item">
             <img src="./dfef460d-7ac8bf0fcebb8b513417112433340391-1024-1024.jpeg" alt="React Gato">
             <div class="preço">R$899,00</div>
             <h5>React Gato</h5>
         </div>
         <div class="item">
             <img src="./2IA-9046-979_zoom2.webp" alt="Umbro Pro 5">
             <div class="preço">R$ 649,99</div>
             <h5>Umbro Pro 5</h5>
         </div>
         <div class="item">
             <img src="./177217-800-auto.webp" alt="Joma Ferrão">
             <div class="preço">R$ 696,57</div>
             <h5>Joma Ferrão</h5>
         </div>
         <div class="item">
             <img src="./dfef460d-7ac8bf0fcebb8b513417112433340391-1024-1024.jpeg" alt="React Gato">
             <div class="preço">R$899,00</div>
             <h5>React Gato</h5>
         </div>
         <div class="item">
             <img src="./2IA-9046-979_zoom2.webp" alt="Umbro Pro 5">
             <div class="preço">R$ 649,99</div>
             <h5>Umbro Pro 5</h5>
         </div>
         <div class="item">
             <img src="./177217-800-auto.webp" alt="Joma Ferrão">
             <div class="preço">R$ 696,57</div>
             <h5>Joma Ferrão</h5>
         </div>
     </div>
 
     <footer class="footer">
         <div class="footerimg">
             <img class="logo2" src="./icons8-bola-de-futebol-2-50 (1).png" alt="Logo">
             <p>Nos siga nas nossas redes sociais</p>
         </div>
         <div class="footericon">
             <img src="1466166 1.png" alt=""><img src="20673 1.png" alt=""><img
                 src="tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png 1.png" alt=""><img src="8cxn5xrdi 1.png"
                 alt="">
         </div>
         <div class="footertexto">
             <p>Gleba Paiçandu - Lote 80 Zona Rural Ivatuba - PR</p>
         </div>
 
     </footer>
 
    </>
  )
}

export default App
