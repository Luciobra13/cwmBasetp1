import {createComponent} from "./../core/componentes.js";

const template = `<section id="section-login" class="mb-5 container">
<h1>Iniciar Sesión</h1>
<form action="#" id="authLoginForm">
    <div class="mb-3">
        <label for="authLoginEmail" class="form-label">Email</label>
        <input type="email" id="authLoginEmail" class="form-control">
    </div>
    <div class="mb-3">
        <label for="authLoginPassword" class="form-label">Password</label>
        <input type="password" id="authLoginPassword" class="form-control">
    </div>
    <button class="btn btn-danger w-100" type="submit">Ingresar</button>
</form>
<!-- data-router-link es un atributo que vamos a usar para redireccionar a la ruta indicada. -->
<p>¿No tenés cuenta aún? <a href="#" data-router-link="registro">Registrate y obtené tu cuenta gratis</a></p>
<div id="authLoginConsole"></div>
</section>`;

const Login = createComponent(template, {});

export default Login;