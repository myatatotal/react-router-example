import React, { Suspense } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PaginaResumoSemestre from './pagina';
import DetalhesMes from './detalhes-mes';

function ResumoSemestreRoute() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={PaginaResumoSemestre} />
            <Route exact path={`${path}/detalhe-mes`} component={DetalhesMes} />
        </Switch>
    )
}

export default ResumoSemestreRoute