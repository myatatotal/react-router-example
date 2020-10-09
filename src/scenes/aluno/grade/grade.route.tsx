import React, { Suspense } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Editar from './editar';
import Listagem from './listagem';


function GradeRoute() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={Listagem} />
            <Route exact path={`${path}/editar`} component={Editar} />
        </Switch>
    )
}

export default GradeRoute