const debliwui_corrida = document.createElement('template');
debliwui_corrida.innerHTML = `
    <style>
        	*{margin:0;padding:0;}
        .container{
            position:fixed;
            padding: 45px 5% 20px 5%;
            height:fit-content;
            right: 0;
            bottom:0;
            background: #FFFFFF;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius:50px 50px 0 0;
            z-index: 10000;
        }

        .inputs{
            width:100%;
            display: none;
            align-items:flex-start;
            justify-content:space-around;
        }
        .inputs .inputde{
            width: 207px;
            height: 31px;
            background: rgba(217, 217, 217, 0.35);
            border-radius: 5px 5px 0px 0px;
            text-align:center;
            color: #d97e13;
            border: 1px solid rgba(217, 217, 217, 0.35);
        }
        .inputs .inputde:focus{
            outline: 1px solid #d97e13;
        }

        .inputs .inputpara{
            width: 207px;
            height: 31px;
            background: rgba(217, 217, 217, 0.35);
            border-radius: 0px 0px 5px 5px;
            text-align:center;
            color: #6EC85F;
            border: 1px solid rgba(217, 217, 217, 0.35);
        }
        .inputs .inputpara:focus{
            outline: 1px solid #6EC85F;
        }

        .inputs div{
            position:relative;
            margin:5px;
        }
        .inputs .span{
            position:absolute;
            top: 6px;
            left: 6px;
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.5);

        }
        .inputs img{
            margin: 15px 5%;
        }

        *:focus {
            outline:none;
        }

        .switch{
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            cursor:pointer;
            border-radius:10px;
            margin-top:30px !important;
        }


        .basic-info{
            width:96%;
            padding:2%;
            display:block;
            font-size:12px;
            margin: 10px 0 15px 0;

        }

        .basic-info p{
           display:inline-block;

        }
        .basic-info .basic-distancia-preco span{
            color:#6EC85F;
        }
        .basic-tempo{
            float:right;
        }

        .btn-chamar-taxi{
            width: 207px;
            height: 31px;
            background: #2FD913;
            border:none;
            border-radius: 5px;
            display:block;
            margin:0 auto;
            border: 1px solid #2FD913;
            cursor:pointer;
        }

        @media screen and (max-width:500px) {
            .container{
                width:90%;
            }
        }
    </style>

    <div class="container">
        <div class="inputs">
            <img src="assets/start-finish.png">
            <section>
                <div><span class="span">De</span><input type="text" class="inputde"></div>
                <div><span class="span">para</span><input type="text" class="inputpara"></div>
                <section class="basic-info">
                    <p class="basic-distancia-preco"> Distância: 12 km <br><span>Preço: 4 000 kz</span></p>
                    <p class="basic-tempo"> Tempo de viagem <br><span>1h20</span></p>
                </section>
                <button class="btn-chamar-taxi">CHAMAR TAXI</button>
            </section>
            <img src="assets/switch.png" class="switch">
        </div>
    </div>
`;

class debliwuicorrida extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_corrida.content.cloneNode(true));
    }

    status = 1;


    connectedCallback() {
        var esse = this;
        console.log(this.status);
        var container = this.shadowRoot.querySelector('.container');
        container.addEventListener("click", function() {
            let inputs = esse.shadowRoot.querySelector('.inputs');

            if (inputs.style.display == "flex") {
                
            } else {
                inputs.style.display = "flex";
                
            }
        }, true);

    }



}

window.customElements.define('debliwui-corrida', debliwuicorrida)