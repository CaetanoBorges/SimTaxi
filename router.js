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
    "/": "/pages/inicio.html",
    "/entrar": "/pages/entrar.html",
    "/esqueceuapasse": "/pages/esqueceuapasse.html",
    "/confirmaresqueceuapasse": "/pages/confirmaresqueceuapasse.html",
    "/novapalavrapasse": "/pages/novapalavrapasse.html",
    "/criarconta": "/pages/criarconta.html",
    "/verificarcadastro": "/pages/verificarcadastro.html",
    "/concluircadastro": "/pages/concluircadastro.html",
    "/home": "/pages/home.html",
    "/corridas": "/pages/corridas.html",
    "/rotas": "/pages/rotas.html",
    "/conta": "/pages/minhaconta.html",
    "/termosdeuso": "/pages/termosdeuso.html",
    "/privacidade": "/pages/politicasdeprivacidade.html",
    "/taxiacaminho": "/pages/taxiacaminho.html",
    "/corrida": "/pages/corrida.html",
    "/rota": "/pages/rota.html",
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