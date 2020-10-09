import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export function PaginaResumoSemestre() {
    let { url } = useRouteMatch();

    return (
        <>
            <h2>Pagina principal de resumo semestre</h2>
            <Link to={`${url}/detalhe-mes`}>Detalhes</Link>
        </>
    )
}