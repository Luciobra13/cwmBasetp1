import {createComponent} from "./../core/componentes.js";

const template = `<section id="section-register" class="mb-5 container">
    <h1>Registrarse</h1>
    <form action="#" id="authRegisterForm">
        <div class="mb-3">
            <label for="authRegisterEmail" class="form-label">Email</label>
            <input type="email" id="authRegisterEmail" class="form-control">
        </div>
        <div class="mb-3">
            <label for="authRegisterPassword" class="form-label">Password</label>
            <input type="password" id="authRegisterPassword" class="form-control">
        </div>
        <button class="btn btn-primary w-100" type="submit">Registrarse</button>
    </form>
    <p>¿Ya tenés cuenta? <a href="#" data-router-link="login">Iniciá sesión</a></p>
    <div id="authRegisterConsole"></div>
</section>`;

// Obtenemos el nodo del DOM generado a partir del template.
const Registro = createComponent(template, {});

export default Registro;