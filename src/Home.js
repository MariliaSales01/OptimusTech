import './Styles/Home.css';
import Logo from './assets/Logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react';

export default function Home() {
    const navRef = useRef()

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
      <div className="Home">
       <header>
            <div className='nav-bar'>
                <div className='logo'>
                    <img src={Logo}/>
                    <h1>OptimusTech</h1>
             </div>

                <nav className='nav-links' ref={navRef}>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Produtos</a></li>
                        <li><a href='#'>Recursos</a></li>
                        <li><a href='#'>Sobre nós</a></li>
                    </ul>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>

                </nav>

                <div className='button-header'>
                    <a href='#' id='login'>Entrar</a>
                    <a href='#' id='cadastre'>Cadastrar</a>
                </div>

                <button className='nav-btn'  onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
       </header>

        <section className='AboutUs'>
            <div className='content-about'>
                <span>Sobre nós</span>
                <h2>Por que somos diferentes?</h2>
                <p>Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente imporrtante para elas.</p>
            </div>
        </section>
      </div>
    );
  }