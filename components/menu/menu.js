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
        }
        .conteudo{
            width:250px;
            height:100vh;
            border-right:2px solid #b4075920;
            background: #fff7fc;
            z-index: 10102;
        }
        .relativa{
            position: relative;
            z-index: 10102;
            overflow:auto;
        }
        .backdrop{
            width:100%;
            height:100%;
            position:fixed;
            width:100%;
            left: 0;
            top:47px;
            height:100vh;
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
            padding: 5px;
            display: flex;
            align-items:center;
            margin: 7px 0;
        }
        
        ul li img {
            width: 25px;
            margin: 0 10px 0 20px;
        }

        .aciona-menu{
            width:25px;
            margin: 18px 0 0 15px;
            cursor:pointer;
            z-index:11111;
        }
        @media screen and (max-width:700px) {
            .conteudo{
                display:none;
            }
        }
    </style>

    <div class="container">
        <img src="http://cdn.binga.ao/conta/icones/menu.png" class="aciona-menu">
        
        <div class="conteudo" style="display:none">
            <div class="backdrop"></div>
            <div class="relativa">
                <br><br>
                <ul>
                    <a href="" class="url-inicio">
                        <li id="menu-inicio"> <img src="http://cdn.binga.ao/conta/icones/pessoa.png"> <span>Página inicial</span></li>
                    </a>
                    <a href="" class="url-dados">
                        <li id="menu-dados"> <img src="http://cdn.binga.ao/conta/icones/identidade.png"> <span>Dados pessoais</span></li>
                    </a>
                    <a href="" class="url-seguranca" onclick="sair()">
                        <li id="menu-seguranca"> <img src="http://cdn.binga.ao/conta/icones/seguranca.png"> <span>Segurança</span></li>
                    </a>
                    <a href="" class="url-pagamentos">
                        <li id="menu-pagamento"> <img src="http://cdn.binga.ao/conta/icones/pagamentos.png"> <span>Pagamentos e subscrições</span></li>
                    </a>
                    <div class="linha-divisoria"></div>
                    <a href="" class="url-informacoes">
                        <li id="menu-informacoes"> <img src="http://cdn.binga.ao/conta/icones/informacoes.png"> <span>Sair</span></li>
                    </a>
                </ul>
            </div>
        </div>
        
    </div>

    <script>
        
    </script>

`;

class debliwuimenu extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_menu.content.cloneNode(true));
    }

    fechar(esse) {
        let container = esse.shadowRoot.querySelector('.container');

        if (container.style.display == "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    connectedCallback() {
        var esse = this;

        var token = this.getAttribute('token');
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

        this.shadowRoot.querySelector('.url-inicio').setAttribute("href", "inicio.php?ftpadbc=" + token);
        this.shadowRoot.querySelector('.url-dados').setAttribute("href", "dados.php?ftpadbc=" + token);

        this.shadowRoot.querySelector('.url-seguranca').setAttribute("href", "seguranca.php?ftpadbc=" + token);
        this.shadowRoot.querySelector('.url-pagamentos').setAttribute("href", "pagamentos.php?ftpadbc=" + token);
        //this.shadowRoot.querySelector('.url-informacoes').setAttribute("href", "informacoes.php?ftpadbc=" + token);
        this.shadowRoot.querySelector('.url-informacoes').addEventListener("click", function(e) {
            e.preventDefault();
        });




        this.shadowRoot.querySelector('.url-informacoes').addEventListener("click", function() {
            console.log(localStorage.removeItem("ftpadb-binga"));
            location.href = "http://entrar.binga.ao";
        });

    }

}
window.customElements.define('debliwui-menu', debliwuimenu)