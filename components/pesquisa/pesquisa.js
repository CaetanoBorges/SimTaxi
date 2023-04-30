const debliwui_pesquisa = document.createElement('template');
debliwui_pesquisa.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:270px;
            right: 15px;
            top:18px;
            height:fit-content;
            z-index: 10102;
            padding:0;
            font-size:12pt;
        }

        .pesquisar {
            
            display:flex;
            align-items:center;
            justify-content: space-between;
            width:100%;
            height:fit-content;
        }
        .pesquisar input{
            box-sizing: border-box;
            width: 207px;
            height: 31px;
            background: rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(0, 0, 0, 0.29);
            border-radius: 5px;
            text-align:center;
            text-transform: uppercase;
            font-size:10px;
        }
        .pesquisar .img {
            width: 20px;
            height: 20px;
            position:absolute;
            top:6px;
            left:10px;
            opacity:.4;
        }

        .pesquisar .aciona-pesquisa {
            width: 30px;
            height: 30px;
        }

        @media screen and (max-width:700px) {
            .conteudo{
                display:none;
            }
        }
    </style>

    <div class="container">
        
        <div class="pesquisar">
            <div>
                <img class="img" src="assets/pesquisar.png">
                <input type="text" placeholder="Procurar localização">
            </div>
            <img src="assets/location-header.svg" class="aciona-pesquisa">
        </div>
        
    </div>

    <script>
        
    </script>

`;

class debliwuipesquisa extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_pesquisa.content.cloneNode(true));
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



    }

}
window.customElements.define('debliwui-pesquisa', debliwuipesquisa)