import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Turmas from '../turmas';

export function Listagem() {
    let { url } = useRouteMatch();

    return (
        <>
            <h3>Pagina principal da grade</h3>
            <Turmas />
            <Link to={`${url}/editar`}>Editar</Link>
        </>
    )
}