import React from "react";
import BotaoVoltar from "../BotaoVoltar";
import './estilo.css';

export default function EstruturaPagina(props)
{
    return (
        <div className="alturaMaxima">
            <div className="estrutura">
                <nav className="links-estrutura">
                    <ul>
                        <li className="links">Enredo</li>
                        <li className="links">Jogo</li>
                        <li className="links">Críticas</li>
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
