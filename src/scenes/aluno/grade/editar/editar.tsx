import React from 'react'
import Turmas from '../turmas'
import { useHistory } from 'react-router-dom';

export function Editar() {
    let { goBack } = useHistory();

    return (
        <>
            <h3>Editar Grade</h3>
            <Turmas />
            <button onClick={goBack}>Voltar</button>
        </>
    )
}