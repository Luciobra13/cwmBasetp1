import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './paginas/Login.js';
import Registro from './paginas/registro.js';
import Perfil from './paginas/Perfil.js';
import Chat from './paginas/Chat.js';
import { routerInit } from './roots/router.js';

const routes = [
    {
        name:'login',
        component: Login,
    },
    {
        name: 'registro',
        component: Registro,
    },
    {
        name: 'perfil',
        component: Perfil,
    },
    {
        name: 'chat',
        component: Chat,
    },
];

const root = document.getElementById('root');

routerInit({
    routes: routes,
    rootElem: root,
    initialRoute: 'login',
});

//root.appendChild(Login);