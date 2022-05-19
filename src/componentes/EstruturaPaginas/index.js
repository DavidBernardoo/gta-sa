import React from "react";
import BotaoVoltar from "../BotaoVoltar";
import { Link } from "react-router-dom";
import './estilo.css';

export default function EstruturaPagina(props)
{
    return (
        <div className="alturaMaxima largura-limitada">
            <div className="estrutura">
                <nav className="links-estrutura">
                    <ul>
                        <li><Link className="links" to='/sobre/enredo'>Enredo</Link></li>
                        <li><Link className="links" to='/sobre/jogo'>Jogo</Link></li>
                        <li><Link className="links" to='/sobre/criticas'>Críticas</Link></li>
                    </ul>
                </nav>

                <div className="conteudo-estrutura">
                    { props.children }
                </div>
            </div>
            <BotaoVoltar />
        </div>
    );
}
