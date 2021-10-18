const sections = {

};

let root;

/**
 * 
 * @param {string} route 
 */

function routerCambioA (route) {
    root.innerHTML = "";
    root.appendChild(sections[route].component);
    routerAddListenerCambioRutas(root.firstChild);
}

/**
 * 
 * @param {HTMLElement} elementos 
 */
function routerAddListenerCambioRutas(elementos) {
   root.addEventListener('click', function(ev){
       if(ev.target.dataset.routerLink) {
           ev.preventDefault();
           routerCambioA(ev.target.dataset.routerLink);
       }
   })
    
}

/**
 * @param {{routes: {name: string, component: HTMLElement}[], rootElem: HTMLElement, initialRoute: string}}
 */

function routerInit({routes, rootElem, initialRoute}) {
    root = rootElem;
    routes.forEach(route=> {
        sections[route.name] = route;
    });

    routerCambioA(initialRoute);
}

export {
    routerInit,
    routerCambioA,
}