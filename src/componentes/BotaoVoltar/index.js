import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

export default function BotaoVoltar() 
{
    return (
        <Link className='botaoVoltar links' to='/'>Voltar</Link>
    );
}
