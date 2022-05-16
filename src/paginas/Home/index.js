import React from "react";
import { Link } from "react-router-dom";
import './estilo.css';

export default function Home() {
    return (
        <div className="home">
            <nav>
                <Link className="links link-home " to='/sobre/Enredo'>Sobre</Link>
                <Link className="links link-home" to={''}>Wiki</Link>
                <Link className="links link-home " to={''}>Mapa</Link>
            </nav>
        </div>
    );
}
