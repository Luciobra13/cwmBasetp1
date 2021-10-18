import {createComponent} from "./../core/componentes.js";

const template = `<section id="section-chat">
    <div class="mb-3">
        <h1>Sala de Chat</h1>
        <button type="button" class="btn btn-danger" id="authLogoutBtn">Cerrar Sesión (<span class="auth-user-email"></span>)</button>
        <a href="#" class="btn btn-primary" data-router-link="perfil">Mi Perfil</a>
    </div>
    <div class="row">
        <section class="col-8">
            <h2 class="visually-hidden">Lista de mensajes</h2>
            <div id="chatMessages" class="chat"></div>
        </section>
        <section class="col-4">
            <h2 class="visually-hidden">Escribir un mensaje</h2>
            <form id="chatForm">
                <div class="mb-3">
                    <div class="mb-2">Nombre de usuario</div>
                    <span class="auth-user-email"></span>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea id="message" class="form-control"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Enviar</button>
            </form>
        </section>
    </div>
</section>`;

// Obtenemos el nodo del DOM generado a partir del template.
const Chat = createComponent(template, {});

export default Chat;