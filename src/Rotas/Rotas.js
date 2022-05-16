import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Enredo from '../paginas/sobre/Enredo';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Home /> }/>
                <Route path='/sobre/enredo' element={ <Enredo /> }/>
            </Routes>
        </BrowserRouter>
    );
}
