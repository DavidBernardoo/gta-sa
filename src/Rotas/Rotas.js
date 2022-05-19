import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Enredo from '../paginas/sobre/Enredo'
import Jogo from '../paginas/sobre/Jogo';
import Criticas from '../paginas/sobre/Criticas';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Home /> }/>
                <Route path='/sobre/enredo' element={ <Enredo /> }/>
                <Route path='/sobre/jogo' element={ <Jogo /> }/>
                <Route path='/sobre/criticas' element={ <Criticas /> }/>
            </Routes>
        </BrowserRouter>
    );
}
