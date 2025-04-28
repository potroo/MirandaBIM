import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
 

 <div className=''>
     
         <div className="foto">
             <p className="fototexto">AS MELHORES<br/>
                 CHUTEIRAS</p>
         </div>
 </div>

         <div className="container">
             <div className="item">
                 <img src="https://imgnike-a.akamaihd.net/1300x1300/0163635AA8.jpg" alt="React Gato"/>
                 <div className="preço">R$899,00</div>
                 <h5>React Gato</h5>
             </div>
             <div className="item">
                 <img src="https://decathlonpro.vtexassets.com/arquivos/ids/111522389/-chut-futsal-umbro-pro-uk-105---eu-45-41-br1.jpg?v=638416097176770000" alt="Umbro Pro 5"/>
                 <div className="preço">R$ 649,99</div>
                 <h5>Umbro Pro 5</h5>
             </div>
             <div className="item">
                 <img src="https://imgcentauro-a.akamaihd.net/1200x1200/M11YIQ01A1.jpg" alt="Joma Ferrão"/>
                 <div className="preço">R$ 696,57</div>
                 <h5>Joma Ferrão</h5>
             </div>
             <div className="item">
                 <img src="https://imgnike-a.akamaihd.net/1300x1300/0163635AA8.jpg" alt="React Gato"/>
                 <div className="preço">R$899,00</div>
                 <h5>React Gato</h5>
             </div>
             <div className="item">
                 <img src="https://decathlonpro.vtexassets.com/arquivos/ids/111522389/-chut-futsal-umbro-pro-uk-105---eu-45-41-br1.jpg?v=638416097176770000" alt="Umbro Pro 5"/>
                 <div className="preço">R$ 649,99</div>
                 <h5>Umbro Pro 5</h5>
             </div>
             <div className="item">
                 <img src="https://imgcentauro-a.akamaihd.net/1200x1200/M11YIQ01A1.jpg" alt="Joma Ferrão"/>
                 <div className="preço">R$ 696,57</div>
                 <h5>Joma Ferrão</h5>
             </div>
             <div className="item">
                 <img src="https://imgnike-a.akamaihd.net/1300x1300/0163635AA8.jpg" alt="React Gato"/>
                 <div className="preço">R$899,00</div>
                 <h5>React Gato</h5>
             </div>
             <div className="item">
                 <img src="https://decathlonpro.vtexassets.com/arquivos/ids/111522389/-chut-futsal-umbro-pro-uk-105---eu-45-41-br1.jpg?v=638416097176770000" alt="Umbro Pro 5"/>
                 <div className="preço">R$ 649,99</div>
                 <h5>Umbro Pro 5</h5>
             </div>
             <div className="item">
                 <img src="https://imgcentauro-a.akamaihd.net/1200x1200/M11YIQ01A1.jpg" alt="Joma Ferrão"/>
                 <div className="preço">R$ 696,57</div>
                 <h5>Joma Ferrão</h5>
             </div>
         </div>
     <Footer/>
 
     
    </>
  )
}

export default App
