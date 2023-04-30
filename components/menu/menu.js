const debliwui_menu = document.createElement('template');
debliwui_menu.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:fit-content;
            left: 0;
            top:0;
            height:fit-content;
            z-index: 10102;
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
            background: rgba(0, 0, 0, .1)
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
            background-color:#6EC85F;
            width:90%;
            height:25vh;
            display:flex;
            align-items:baseline;
            flex-direction:column;
            justify-content: flex-end;
            padding: 0 0 3vh 10%;

        }
        .user div{
            width:72pt;height:72pt;
            border-radius:50%;
        }
        .user img{
            width:100%;
            }

            .sair{position:absolute;bottom:10pt;right:10pt;color:#2fd913;}
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
                    <a href="/" class="home">
                        <li> <img src="assets/home.svg"> <span>Início</span></li>
                    </a>
                    <a href="/corridas" class="corridas">
                        <li> <img src="assets/location-menu.svg"> <span>Corridas</span></li>
                    </a>
                    <a href="/rotas" class="rotas">
                        <li> <img src="assets/rota-menu.svg"> <span>Rotas</span></li>
                    </a>
                    <a href="/pagamentos" class="pagamentos">
                        <li> <img src="assets/pagamento-menu.svg"> <span>Pagamentos</span></li>
                    </a>
                    <div class="linha-divisoria"></div>
                    <a href="/conta" class="conta">
                        <li> <img src="assets/user-menu.svg"> <span>Minha conta</span></li>
                    </a>
                    <a href="/reembolso" class="reembolso">
                        <li> <img src="assets/money-menu.svg"> <span>Políticas de reembolso</span></li>
                    </a>
                    <a href="/taxiacaminho" class="privacidade">
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
        "/": "/pages/home.html",
        "/corridas": "/pages/corridas.html",
        "/rotas": "/pages/rotas.html",
        "/pagamentos": "/pages/pagamentos.html",
        "/conta": "/pages/conta.html",
        "/reembolso": "/pages/reembolso.html",
        "/privacidade": "/pages/privacidade.html",

        "/taxiacaminho": "/pages/taxiacaminho.html"
    }

    handleLocation = async(routes) => {
        const path = window.location.pathname;
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
        this.shadowRoot.querySelector('.aciona-menu').addEventListener("click", function() {
            let container = esse.shadowRoot.querySelector('.conteudo');

            if (container.style.display == "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
        this.shadowRoot.querySelector('.backdrop').addEventListener("click", function() {
            let container = esse.shadowRoot.querySelector('.conteudo');

            if (container.style.display == "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });

        this.shadowRoot.querySelector('.privacidade').addEventListener("click", function(event) {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", "/" + (this.href).split("/")[3]);
            esse.handleLocation(esse.routes);
        });






    }

}
window.customElements.define('debliwui-menu', debliwuimenu)