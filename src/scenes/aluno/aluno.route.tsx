import React, { Suspense } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Grade from './grade';

const ResumoSemestre = React.lazy(() => import('./resumo-semestre'))


function AlunoRoute() {
    let { path } = useRouteMatch();
    return (
        <Suspense fallback={<div>Carregando página de aluno...</div>}>
            <Switch>
                <Route path={`${path}/grade`} component={Grade} />
                <Route path={`${path}/resumo-semestre`} component={ResumoSemestre} />
            </Switch>
        </Suspense>
    )
}

export default AlunoRoute