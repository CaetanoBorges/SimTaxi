const route = (event) => {
    console.log(event);
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const vaiTela = (route) => {
    window.history.pushState({}, "", route);
    handleLocation();
}

const prefixed = "SimTaxi/";
const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/corridas": "/pages/corridas.html",
    "/rotas": "/pages/rotas.html",
    "/pagamentos": "/pages/pagamentos.html",
    "/conta": "/pages/conta.html",
    "/reembolso": "/pages/reembolso.html",
    "/privacidade": "/pages/privacidade.html",
    "/taxiacaminho": "/pages/taxiacaminho.html",
    "/corrida": "/pages/corrida.html",
    "/motorista": "/pages/motorista.html"
}

const handleLocation = async() => {
    const path = window.location.pathname;
    console.log(path);
    if(path == "/motorista"){
        MOTORISTA.carroSlide();
    }
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector("#main").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();