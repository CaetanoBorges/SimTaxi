var corrida = false;
const route = (event) => {
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
    "/conta": "/pages/conta.html",
    "/reembolso": "/pages/reembolso.html",
    "/privacidade": "/pages/privacidade.html",
    "/taxiacaminho": "/pages/taxiacaminho.html",
    "/corrida": "/pages/corrida.html",
    "/motorista": "/pages/motorista.html"
}

const handleLocation = async() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    console.log(path);
    if (path == "/motorista") {
        MOTORISTA.carroSlide();

        setTimeout(function() {
            MOTORISTA.reagirButtons(MOTORISTA);
        }, 100);
    }
    if (hash == "") {
        corrida ? corrida.fecharChamarUmFn(corrida) : "";
    }
    if (hash == "#chamarumtaxi") {
        corrida ? corrida.fecharChamarFn(corrida) : "";
        corrida ? corrida.abrirChamarUmFn(corrida) : "";
    }
    if (hash == "#chamarotaxi") {
        corrida ? corrida.fecharConcluirFn(corrida) : "";
        corrida ? corrida.abrirChamarFn(corrida) : "";
    }
    if (hash == "#concluirpedidodotaxi") {
        corrida ? corrida.fecharConfirmarFn(corrida) : "";
        corrida ? corrida.abrirConcluirFn(corrida) : "";
    }
    if (hash == "#confirmarpedidodotaxi") {
        corrida ? corrida.abrirConfirmarFn(corrida) : "";
    }
    if (hash == "#pedidoconcluido") {
        corrida ? corrida.abrirConcluirSMSFn(corrida) : "";
    }

    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector("#main").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();