import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Router} from 'react-router-dom';
import login from "./views/login/login"
import painel from "./views/painel/painel"
import painel_artistas from "./views/painel_artistas/painel_artista";
import gerenciar_artista from "./views/gerenciar_artista/gerenciar_artista";
import user_page from './views/user_page/user_page';
import viwe_artista from './views/artist_page/artist_page';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/app" component={painel} />
            <Route exact path="/artistas" component={painel_artistas} />
            <Route exact path="/artistas/gerenciar" component={gerenciar_artista} />
            <Route exact path="/artistas/gerenciar/:id" component={gerenciar_artista} />
            <Route exact path="/user" component={user_page} />
            <Route exact path="/viweartista/:id" component={viwe_artista} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;