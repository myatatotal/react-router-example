import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import AlunoRoute from './aluno.route';

export function Aluno() {
    let { url } = useRouteMatch();

    return (
        <>
            <h1>Aluno</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/grade`}>Grade</Link>
                    </li>
                    <li>
                        <Link to={`${url}/resumo-semestre`}>Resumo Semestre</Link>
                    </li>
                </ul>
            </nav>
            <AlunoRoute />
        </>
    )
}