import React from 'react'
import { useHistory } from 'react-router-dom';

export function DetalhesMes() {
    let { goBack } = useHistory();

    return (
        <>
            <p>Detalhes do resumo mes</p>
            <button onClick={goBack}>Voltar</button>
        </>
    )
}