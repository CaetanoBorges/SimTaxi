const debliwui_btnatualizardados = document.createElement('template');
debliwui_btnatualizardados.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            margin: 30px auto 0 auto;
            border: 1px solid #d9d9d9;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 31px;
            display: block;
        }
        
        
        .dois{
            display:block;
            width: fit-content;
            height: 31px;
            background: #00ff00;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            margin:5px auto;
            border: 1px solid #00ff00;
            cursor:pointer;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 31px;
        }
        

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:#00000090;display:none;z-index: 1000;}
        .content{
            display:none;
            position: fixed;
            top: 25vh;
            /* display: block; */
            width: 76%;
            padding: 2%;
            /* margin: 15vh 0 0 20%; */
            background: #ffffff;
            border-radius: 5px;
            left: 10%;z-index: 1000;}
            .content p{text-align:center;font-size:12pt;}
            .content textarea{display:block;margin:10px auto;
            width: 140px;
            height: 73px;
            background: #F5F5F5;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            padding:4px;}
        
    </style>

    <div class="container">
        <button class="btn">ATUALIZAR DADOS</button>
        <div class="backdrop"></div>
        <div class="content">
            <p>Tem certeza?</p>
            <button class="dois">SIM, ATUALIZAR</button>
        </div>
    </div>
`;

class debliwuibtnatualizardados extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btnatualizardados.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })
    }


}

window.customElements.define('debliwui-btnatualizardados', debliwuibtnatualizardados)