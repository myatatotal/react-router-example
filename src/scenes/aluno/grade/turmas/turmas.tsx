import React from 'react'

const turmas = [
    {
        id: 1,
        name: 'one'
    },
    {
        id: 2,
        name: 'two'
    },
    {
        id: 3,
        name: 'three'
    }, 
]

export function Turmas () {
    return (
        <>
            <h4>Turmas</h4>
            <ul>
            {turmas.map((turma) => (
                <li key={turma.id}>
                    {turma.name}        
                </li>
            ))}
            </ul>
        </>  
    )
}