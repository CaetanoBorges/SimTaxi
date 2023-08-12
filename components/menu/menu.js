const debliwui_menu = document.createElement('template');
debliwui_menu.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:fit-content;
            left: 0;
            top:0;
            height:fit-content;
            z-index: 9999999999;
            padding:0;
            font-size:12pt;
        }
        .conteudo{
            position:absolute;
            top:0;
            width:300px;
            height:100vh;
            background: #ffffff;
            z-index: 10102;
        }
        .relativa{
            position: relative;
            z-index: 10102;
            overflow:auto;
            height:100vh;
            background-color: #ffffff;
        }
        .backdrop{
            width:100%;
            height:100%;
            position:fixed;
            width:100%;
            left: 0;
            top:0;
            height:100vh;
            background: #00000074;
        }
        
        ul {
            list-style: none;
            width: 100%;
            margin-left: -50px;
        }
        
        ul a {
            text-decoration: none;
            color: #7a7a7a;
            font-weight: 600;
            text-align: left;
        }
        
        ul li:hover {
            background: #961A1A;
            color:white;
        }
        
        ul li {
            width: 100%;
            padding: 5px 5px 10px 5px;
            display: flex;
            align-items:center;
            margin: 7px 0;
            border-bottom:1px solid #00000010;
        }
        
        ul li img {
            width: 25px;
            margin: 0 30px 0 30px;
        }

        .aciona-menu{
            width:25px;
            margin: 18px 0 0 15px;
            cursor:pointer;
            z-index:11111;
        }
        .user{
            background-color:#961A1A;
            width:90%;
            height:25vh;
            display:flex;
            align-items:baseline;
            flex-direction:column;
            justify-content: flex-end;
            padding: 0 0 3vh 10%;
            color:white;

        }
        .user div{
            width:72pt;height:72pt;
            border-radius:50%;
        }
        .user img{
            width:100%;
            }

            .sair{position:absolute;bottom:10pt;right:10pt;color:#961A1A;}
        @media screen and (max-width:700px) {
            .conteudo{
                display:none;
            }
        }
    </style>

    <div class="container">
        <img src="assets/barras-menu.svg" class="aciona-menu">
        
        <div class="conteudo" style="display:none">
            <div class="backdrop"></div>
            <div class="relativa">
                <span class="sair">Sair</span>
                <div class="user">
                    <div> <img src="assets/avatar.png"> </div>
                    <p>Nome do usuario</p>
                </div>
                <ul>
                    <a href="/home" class="home">
                        <li> <img src="assets/home.svg"> <span>Início</span></li>
                    </a>
                    <a href="/corridas" class="corridas">
                        <li> <img src="assets/location-menu.svg"> <span>Corridas</span></li>
                    </a>
                    <a href="/rentacar" class="rentacar">
                        <li> <img src="assets/car.svg"> <span>Renta a car</span></li>
                    </a>
                    <div class="linha-divisoria"></div>
                    <a href="/conta" class="conta">
                        <li> <img src="assets/user-menu.svg"> <span>Minha conta</span></li>
                    </a>
                    <a href="/termosdeuso" class="termosdeuso">
                        <li> <img src="assets/money-menu.svg"> <span>Termos de uso do serviço</span></li>
                    </a>
                    <a href="/privacidade" class="privacidade">
                        <li> <img src="assets/handshake-menu.svg"> <span>Políticas de privacidade</span></li>
                    </a>
                </ul>
            </div>
        </div>
        
    </div>

    <script>
        
    </script>

`;

class debliwuimenu extends HTMLElement {

    constructor(route) {
        super(route);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_menu.content.cloneNode(true));
        this.route = route;
    }

    fechar(esse) {
        let container = esse.shadowRoot.querySelector('.container');

        if (container.style.display == "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }
    routes = {
        404: "/pages/404.html",
        "/home": "/pages/home.html",
        "/corridas": "/pages/corridas.html",
        "/rotas": "/pages/rotas.html",
        "/conta": "/pages/minhaconta.html",
        "/termosdeuso": "/pages/termosdeuso.html",
        "/privacidade": "/pages/politicasdeprivacidade.html",

        "/rentacar": "/pages/rentacar.html"
    }

    handleLocation = async (routes) => {
        const path = window.location.pathname;
        if (path != "/home") {
            window.document.querySelector("#mapa-global").style.display = "none";
        }
        if (path == "/home") {
            window.document.querySelector("#mapa-global").style.display = "block";
        }
        if (path == "/conta") {
            loader.abrir();

            setTimeout(function () {
                _conta.set();
                loader.fechar();
            }, 500);
        }
        if (path == "/corridas") {
            loader.abrir();

            setTimeout(function () {
                _corrida.verCorridas();
                loader.fechar();
            }, 500);
        }
        if (path == "/rentacar") {
            loader.abrir();

            setTimeout(function () {
                _rentacar.getCarros();
                loader.fechar();
            }, 500);
        }
        const route = routes[path] || routes[404];
        const html = await fetch(route).then((data) => data.text());
        window.document.querySelector("#main").innerHTML = html;
    }

    fechar() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }
    abrir() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "block";
    }
    connectedCallback() {
        var esse = this;

        var route = this.getAttribute('route');
        this.shadowRoot.querySelector('.aciona-menu').addEventListener("click", function () {
            let container = esse.shadowRoot.querySelector('.conteudo');

            if (container.style.display == "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
        this.shadowRoot.querySelector('.backdrop').addEventListener("click", function () {
            let container = esse.shadowRoot.querySelector('.conteudo');

            if (container.style.display == "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
        let lis = this.shadowRoot.querySelectorAll('li');
        lis.forEach(element => {
            element.addEventListener("click", function () {
                let container = esse.shadowRoot.querySelector('.conteudo');

                if (container.style.display == "none") {
                    container.style.display = "block";
                } else {
                    container.style.display = "none";
                }
            });
        });


        this.shadowRoot.querySelector('.home').addEventListener("click", function (event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });
        this.shadowRoot.querySelector('.corridas').addEventListener("click", function (event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });
        this.shadowRoot.querySelector('.conta').addEventListener("click", function (event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });
        this.shadowRoot.querySelector('.termosdeuso').addEventListener("click", function (event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });
        this.shadowRoot.querySelector('.privacidade').addEventListener("click", function (event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });
        this.shadowRoot.querySelector('.rentacar').addEventListener("click", function (event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });






    }

}
window.customElements.define('debliwui-menu', debliwuimenu)