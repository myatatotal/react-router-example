import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./home'));
const Aluno = React.lazy(() => import('./aluno'));

export function AppRoute() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/aluno" component={Aluno} />
                <Route path="/professor" />
                <Route path="/contato" />
            </Switch>
        </Suspense>
    )
}