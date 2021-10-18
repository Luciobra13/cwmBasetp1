import {createComponent} from "./../core/componentes.js";

const template = `<section id="section-profile">
    <div class="mb-3">
        <h1>Perfil de <span class="auth-user-email"></span></h1>
        <a href="#" class="btn btn-primary" data-router-link="chat">Volver al Chat</a>
    </div>
    <form action="#" id="profileForm">
        <div class="mb-3">
            <label for="profileDisplayName" class="form-label">Nombre de usuario</label>
            <input type="text" id="profileDisplayName" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
    <div id="profileConsole"></div>
</section>`;

// Obtenemos el nodo del DOM generado a partir del template.
const Perfil = createComponent(template, {});

export default Perfil;