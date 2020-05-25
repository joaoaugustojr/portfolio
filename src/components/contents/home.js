import React from "react"
import Social from '../utils/social'

const Home = () => {
    return (
        <div className="homeTitle">
            <div className="social">
                <Social></Social>
            </div>
            <div className="welcomeText">
                <span className="title">
                    <h1>DESENVOLVEDOR</h1>
                    <h1>WEB <span className="secundaryColor">FULL-STACK</span></h1>
                    {/* <h1>MANCHESTER</h1> */}
                </span>
                <span className="subTitle">
                    <p>
                        SEJA BEM VINDO AO MEU MUNDO! ME CHAMO <span className="secundaryColor">JOÃO AUGUSTO</span> E TENHO MAIS DE 6 ANOS DE EXPERIÊNCIA NA ÁREA DE PROGRAMAÇÃO E DESIGN.
                    </p>
                </span>
                <span className="descriptionTitle">
                    <p>
                        Desenvolvendo novas soluções e sempre buscando a inovação e o bom relacionamento
                        com todos os meus clientes e amigos de trabalho.
                    </p>
                </span>
                <span className="buttonTitle">
                    <button type="button" className="btn btnDefault">Quer saber mais sobre mim?</button>
                </span>
            </div>
        </div>
    )
}

export default Home

