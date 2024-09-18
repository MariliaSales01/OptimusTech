import '../Styles/Main.css';
import img from '../assets/Image.png'
import foto from '../assets/Avatar.png'
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

                <section>
                    <div className='vagas'>
                        <div className='content-vaga'>
                            <h4>Design</h4>

                            <div className='info'>
                            <h4>Product Designer</h4>
                                <span>Full-time</span>
                                <span>Faixa salarial:R$7.000</span>
                            </div>

                            <div className='info'>
                            <h4>Product Designer</h4>
                                <span>Full-time</span>
                                <span>Faixa salarial:R$7.000</span>
                            </div>

                           
                        </div>

                        <div className='content-vaga'>
                            <h4>Desenvolvimento de Software</h4>

                            <div className='info'>
                            <h4>Desenvolvedor(a) iOS</h4>
                                <span>Full-time</span>
                                <span>Faixa salarial:R$8.000</span>
                            </div>

                            <div className='info'>
                            <h4>Desenvolvedor(a) Front-end</h4>
                                <span>Full-time</span>
                                <span>Faixa salarial:R$7.000</span>
                            </div>

                            <div className='info'>
                            <h4>Desenvolvedor(a) Back-end</h4>
                                <span>Full-time</span>
                                <span>Faixa salarial:R$8.000</span>
                            </div>
                        </div>
                    </div>
                </section> 

                <section>
                    <div className='content-depoimento'>
                        <span id='title'>Veja o que nossos colaboradores falam sobre nós</span>
                        <p>OptimusTech se importa com a sáude dos seus colaboradores e <br/> sempre procura nos da todo tipo de auxílio possível.</p>

                        <div className='info-depoimento'>
                            <img src={foto}></img>
                            <span id='name'>Júlia Castro</span>
                            <span>Desenvolvedora Web</span>
                        </div>
                    </div>
                </section>
        </div>
    )

}
