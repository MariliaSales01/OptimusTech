import '../Styles/Main.css';
import img from '../assets/Image.png'

export default function Main() {
    return (
        <div className="main">
            <main>
                <div className='content-vagas'>
                    <div className='content-text'>
                        <span>Vagas abertas!</span>
                        <h2>Estamos procurando por talentos</h2>
                        <p>Somos uma equipe 100% remota com pessooas no Brasil inteiro.</p>

                        <img src={img}></img>
                    </div>
                </div>
            </main>
        </div>
    )

}
