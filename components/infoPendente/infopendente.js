const debliwui_infopendente = document.createElement('template');
debliwui_infopendente.innerHTML = `
    <style>
        .container{
            width:100%;
            height:fit-content;
            background: #fff;
            background: rgba(255, 255, 255, 0.57);
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            margin:7vh 0 2vh 0;
        }

        .dois{
            display:block;
            width: fit-content;
            height: 31px;
            background: #ff0000;
            border-radius: 5px;
            margin:5px auto;
            border: 1px solid #ff0000;
            cursor:pointer;
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
        


        .top{
            width: 90%;
            padding:5%;
            display: flex;
            align-items: center;
        } 
       .endereco{
            width: 100%;
            display: flex;
            align-items: center;
        }
       .endereco p{
            font-size:12px;
            line-height:20px;
            margin:0;
        }

        .btn-chamar-cancelar {
            width: fit-content;
            height: 31px;
            background: #ff0000;
            border-radius: 5px;
            margin: 10PX 0;
            border: 1px solid #ff0000;
            cursor: pointer;
        }
        *:focus {
            outline:none;
        }
        .info {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            text-align:center;
        }
    
    .info .quantos-motoristas {
        width:40px;
        height:40px;
        padding: 5px;
        border-radius: 25px;
        background: #ffffff;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }


    </style>

    <div class="container">
        <div class="top">
            <div class="endereco">
                <img src="assets/start-finish.svg" style="margin-right:1%;">
                <section>
                    <p class="partida">Humpata</p>
                    <p class="destino">Lubango</p>
                </section>
            </div>
            <button class="btn-chamar-cancelar">CANCELAR</button>
        </div>
        <div class="info">
            <div class="quantos-motoristas">3</div>
            <p>MOTORISTAS DISPONÍVEIS<br>ESCOLHA UM E <b>DÁ SIM</b></p>
        </div>

        
        <div class="backdrop"></div>
        <div class="content">
            <p>Diga-nos o motivo</p>
            <textarea></textarea>
            <button class="dois">CANCELAR CORRIDA</button>
        </div>
        
    </div>
`;

class debliwuiinfopendente extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_infopendente.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn-chamar-cancelar").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })
    
    }

   


}

window.customElements.define('debliwui-infopendente', debliwuiinfopendente)