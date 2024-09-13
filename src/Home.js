import './Styles/Home.css';
import Logo from './assets/Logo.png'

export default function Home() {
    return (
      <div className="Home">
       <header>
            <div className='nav-bar'>
                <div className='logo'>
                    <img src={Logo}/>
                    <h1>OptimusTech</h1>
             </div>

                <nav className='nav-links'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Produtos</a></li>
                        <li><a href='#'>Recursos</a></li>
                        <li><a href='#'>Sobre nós</a></li>
                    </ul>
                </nav>

                <div className='button-header'>
                    <a href='#' id='login'>Entrar</a>
                    <a href='#' id='cadastre'>Cadastrar</a>
                </div>
            </div>
       </header>
      </div>
    );
  }