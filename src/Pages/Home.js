import '../Styles/Home.css';
import Logo from '../assets/logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react';
import Main from './Main';

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

        <section className='AboutUs flex'>
            <div className='content-about'>
                <span>Sobre nós</span>
                <h2>Por que somos diferentes?</h2>
                    <p>Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de <br/> todo o mundo a se concentrarem naquilo que é realmente imporrtante para elas.</p>
            </div>
        </section>

        <section className='container-benefits'>
            <div className='benefits'>
                <span>400+</span>
                <h3>Projetos concluídos</h3>
                <p>Nós ajudamos a construir mais de <br/> 400 projetos incríveis.</p>
            </div>

            <div className='benefits'>
                <span>100+</span>
                <h3>Colaboradores</h3>
                <p>Temos mais de 100 colaboradores <br/>no nosso time que se preocupam <br/>com nossos clientes.</p>
            </div>

            <div className='benefits'>
                <span>20k</span>
                <h3>Downloads</h3>
                <p>Nossos projetos que estão<br/>disponíveis em lojas já foram<br/>baixados mais de 20.000 vezes.</p>
            </div>

            <div className='benefits'>
                <span>500+</span>
                <h3>Reviews 5 estrelas</h3>
                <p>Estamos orgulhosos de contar com<br/>mais de 500 reviews 5 estelas em<br/>nossos produtos.</p>
            </div>
        </section>

        <Main/>
      </div>
    );
  }