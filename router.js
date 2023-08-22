var corrida = false;
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

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
    "/motorista": "/pages/motorista.html",
    "/confirmarrota": "/pages/confirmarrota.html",
    "/rentacar": "/pages/rentacar.html",
    "/car": "/pages/car.html",
    "/rent": "/pages/rent.html",
    "/confirmarrent": "/pages/confirmarrent.html",
    "/rentacaminho": "/pages/rentacaminho.html",
    "/definicoes": "/pages/definicoes.html"
}

const handleLocation = async() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    console.log(path);
    if(path != "/home"){
        document.querySelector("#mapa-global").style.display = "none";
    }
    if (path == "/home") {
        var corridaAtiva = localStorage.getItem("corridaativa");
        var corridaPendente = localStorage.getItem("corridapendente");

        if (corridaAtiva != "sim" && corridaPendente != "sim") {
            document.querySelector("#mapa-global").style.display = "block";
            setInterval(function(){
                var element = document.querySelector(".gm-fullscreen-control");
                if(element){
                    element.parentElement.style.display = "none";
                }
                
            },1000)
            
        }        
        
    }
    if (path == "/motorista") {

        loader.abrir();

        setTimeout(function() {
            _corrida.verMotorista()
            _corrida.classificarMotorista()
            loader.fechar();
        }, 500);
    }
    if (path == "/criarconta") {
        

        setTimeout(function() {
            CADASTRO.setDados();
        }, 1000);
    }
    if (path == "/conta") {
        loader.abrir();

        setTimeout(function() {
            _conta.set();
            loader.fechar();
        }, 500);
    }
    if (path == "/corridas") {
        loader.abrir();

        setTimeout(function() {
            _corrida.verCorridas();
            loader.fechar();
        }, 500);
    }
    if (path == "/corrida") {
        loader.abrir();

        setTimeout(function() {
            _corrida.verCorrida();
            loader.fechar();
        }, 500);
    }
    if (path == "/rentacar") {
        loader.abrir();

        setTimeout(function() {
            _rentacar.getCarros();
            loader.fechar();
        }, 500);
    }
    if (path == "/car") {
        loader.abrir();

        setTimeout(function() {
            _rentacar.verCarro();
            loader.fechar();
        }, 500);
    }
    if (path == "/rent") {
        loader.abrir();

        setTimeout(function() {
            _rentacar.rent();
            loader.fechar();
        }, 500);
    }
    if (path == "/rentacaminho") {
        setTimeout(function(){
            loader.abrir();
        },1000);
        

        setTimeout(function() {
            vaiTela("/home");
            loader.fechar();
        }, 1500);
    }
    if (path == "/definicoes") {
        loader.abrir();

        setTimeout(function() {
            _definicoes.set();
            loader.fechar();
        }, 500);
    }
    
    
    if (hash == "") {
        corrida ? corrida.fecharChamarFn(corrida) : "";
        corrida ? corrida.abrirChamarUmFn(corrida) : "";
        if (path == "/home") {
            if(document.querySelector("#from")){
                document.querySelector("#from").removeAttribute("disabled");
            }
            if(document.querySelector("#to")){
                document.querySelector("#to").removeAttribute("disabled");
            }  
        }
    }
    if (hash == "#chamarotaxi") {
        corrida ? corrida.fecharConcluirFn(corrida) : "";
        corrida ? corrida.abrirChamarFn(corrida) : "";
        document.querySelector("#from").setAttribute("disabled","disabled");
        document.querySelector("#to").setAttribute("disabled","disabled");
    }
    if (hash == "#concluirpedidodotaxi") {
        corrida ? corrida.fecharConfirmarFn(corrida) : "";
        corrida ? corrida.abrirConcluirFn(corrida) : "";
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