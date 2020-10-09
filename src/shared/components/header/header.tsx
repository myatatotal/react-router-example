import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <nav>
            <h1>Router Example</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aluno">Aluno</Link>
                </li>
                <li>
                    <Link to="/professor">Professor</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}