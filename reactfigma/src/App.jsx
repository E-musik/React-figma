import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './image/Hero.png';
import Group1 from './image/Group1.png';
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='begin'>
        <header className='header'>
          <div className='logo'>
            <div className='logo1'></div>
            <div className='logo2'></div>
            
          </div>
          <h2>Boldo</h2>
          
          <ul className='log'>
            <li><a href="#">Product</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><button>Login</button></li>
          </ul>

        </header>

        <div className='first'>
          <div className='f1'>
            <div>
              <h2>Safe time by building fast with Boldo Template</h2>
              <h6>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</h6>
              <button className='b1'>Buy Template</button>
              <button className='b2'>Explore</button>  
            </div>
            
          </div>
          <img src= {Hero} alt="Hero" />
          {/* <div className='f3'>
              <h3>Boldo</h3>
              <h3>Presto</h3>
              <h3>Boldo</h3>
              <h3>Presto</h3>
              <h3>Boldo</h3>
              <h3>Presto</h3>
          </div>         */}

         
        </div>
        <div className='group'>
            <img src= {Group1} alt="Group1" />
          </div>

      </div>

      
      <div>
        <div>
          <h4>Our Services</h4>
          <h3>Handshake infographic mass market crowdfunding iteration.</h3>

        </div>

        <div className='features'>
          <span>
            <img src="walking.jpg" alt="image" />
            <h5>Cool feature title</h5>
            <h6>Learning curve network effects return on investment.</h6>
            <h5>Explore page</h5>
          </span>

          <span>
            <img src="handshake.jpg" alt="image" />
            <h5>Even cooler feature</h5>
            <h6>Learning curve network effects return on investment.</h6>
            <h5>Explore page</h5>
          </span>

          <span>
            <img src="sitting.jpg" alt="image" />
            <h5>Cool feature title</h5>
            <h6>Learning curve network effects return on investment.</h6>
            <h5>Explore page</h5>
          </span>
        </div>

      </div>
    </>
  )
}

export default App
