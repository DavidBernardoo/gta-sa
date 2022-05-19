import React from "react";
import EstruturaPagina from "../../../componentes/EstruturaPaginas";
import '../estilo.css';

export default function Enredo() {
    return (
        <EstruturaPagina>
            <div className="texto-limitado">
                <h1 className="titulo">Críticas</h1>
                <p className="texto">O jogo recebeu um aplauso generalizado pelos seus feitos técnicos e jogabilidade livre. Contudo, também recebeu criticas generalizadas - inicialmente devido aos seus elementos "gangsters", que incluem drogas, prostituição e assassinatos; mas mais tarde, devido ao descobrimento de uma cena de sexo interativas desligadas, apelidada de Hot Coffee, que podia ser desbloqueada usando mods de terceiros. Isto levou à re-avaliação do jogo pela ESRB de Maturo (18+) a Adultos-Apenas (21+) até ao relançamento do jogo, com as cenas de sexo completamente removidas, já outras críticas relacionadas às suas versões diferentes, a de PS2 era a que mais tinha "vida" nas cidades, e até mais missões secundárias que a do PC, que tinha poucos NPCs nas ruas e carros, porém um gráfico extremamente melhor que no PS2, que já era bem ultrapassado pela época. Já as remasterizações para a sétima geração (PS3, Xbox 360 e até uma versão Mobile) foram com gráficos "forçados demais", além do pouco tráfico de pessoas e pedestres até mesmo menor que no PC. Ainda teve o lançamento para PS4, que recebeu muitas críticas por ser uma simples emulação com um preço altíssimo.</p>
            </div>
        </EstruturaPagina>
    );
}
