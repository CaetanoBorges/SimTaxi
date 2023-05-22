const debliwui_corrida = document.createElement('template');
debliwui_corrida.innerHTML = `
    <style>
        	*{margin:0;padding:0;}
        .container{
            position:fixed;
            padding: 45px 1% 20px 1%;
            height:fit-content;
            right: 0;
            bottom:0;
            background: none;
            /*box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);*/
            border-radius:50px 50px 0 0;
            z-index: 10101;
            width:400px;
        }

        .btn-chamar-um{
            width: 75%;
            height: 31px;
            background: #ffffff;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            display:block;
            margin:0 auto;
            border: 1px solid #ffffff;
            cursor:pointer;
        }
        .inputs{
            width:100%;
            display: none;
            align-items:flex-start;
            justify-content:space-around;
        }
        .inputs .inputde{
            width: 100%;
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
            width: 100%;
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
            margin:5px 0;
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
            margin: 15px 0;
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
            width:100%;
            padding:2% 0;
            display:flex;
            font-size:13px;
            justify-content:space-between;
            margin: 10px 0 15px 0;

        }

        .basic-info p{
           

        }
        .basic-info .basic-distancia-preco span{
            color:#6EC85F;
        }
        .basic-tempo{
            
        }

        .btn-chamar-taxi{
            width: 100%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            display:block;
            margin:0 auto;
            border: 1px solid #2FD913;
            cursor:pointer;
        }

        .status-um{ display:none;}
        .selects{display:flex;width:100%;align-items:center;justify-content:space-between;}
        .selects select {width: 87px;
            height: 31px;background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;text-align:center;}
                    .selects p{
            height: 15px;
            font-size: 12px;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.67);}


        .cupom{width:100%;}
        .cupom .titulo{
            font-size: 12px;
            text-transform:uppercase;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.67);
        }
        .cupom .descricao{
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.51);
            margin: 0 0 5px 0;
        }
        .cupom input{
            width: 98%;
            height: 31px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;
            padding-left:2%;
        }

        .concluir{width:100%;}
        
        .btn-taxi-concluir{
            width: 75%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:15px 0 5px 10.5%;
            border: 1px solid #2FD913;
            cursor:pointer;
        }
        .concluir .preco{
            font-size: 16px;
            line-height: 19px;
            color: rgba(0, 0, 0, 0.53);
            margin-top:10px;
        }
        .concluir .desconto{
            font-size: 16px;
            line-height: 19px;
            color: #D97E13;
        }
        .concluir .total{
            font-size: 16px;
            line-height: 19px;
            color: #2FD913;margin-bottom:10px;
        }

        .centro{width:75%;}

        .pagamentos{
            background: rgba(217, 217, 217, 0.1);
            display:none;
            margin-top:20px !important;
        }
        .pagamentos .header{
            width:100%;
            text-align:center;
            padding:15px 0;
            background: rgba(217, 217, 217, 0.45);
            border-radius: 5px 5px 0px 0px;
            font-size:16pt;
        }
        .pagamentos .descricao{
            text-align:center;
            padding:15px 0;
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.54);
            margin-top:15px;
        }
        .pagamentos div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            text-align:center;
            border-radius: 0px 0px 5px 5px;
        }
        .pagamentos div img{
            width:22%;
            cursor:pointer;
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 10px;
        }

        .confirmar-sms{
            background: rgba(217, 217, 217, 0.1);
            display:none;
            margin-top:20px !important;
        }
        .confirmar-sms .header{
            width:100%;
            text-align:center;
            padding:15px 0;
            background: rgba(217, 217, 217, 0.45);
            border-radius: 5px 5px 0px 0px;
            font-size:16pt;
        }
        .confirmar-sms .descricao{
            text-align:center;
            padding:15px 0;
            font-size: 12px;
            line-height: 15px;
            color: #000000;
            margin-top:15px;
        }
        .confirmar-sms div{
            width:100%;
            border-radius: 0px 0px 5px 5px;
            padding-bottom:15px;
        }
        .confirmar-sms div input{
            display:block;
            margin: 0 auto;
            width: 80%;
            height: 31px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;
            padding-left:10px;
        }
        .btn-confirmar-sms{
            width: 100%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:15px 0;
            border: 1px solid #2FD913;
            cursor:pointer;
            display:none;
        }
        .btn-concluir-sms{
            width: 100%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:15px 0;
            border: 1px solid #2FD913;
            cursor:pointer;
            display:none;
        }

        @media screen and (max-width:500px) {
            .container{
                width:98%;}
                .pagamentos div img{
            width:38%;
        }
                
        }
    </style>

    <div class="container">
        <button class="btn-chamar-um">CHAMAR UM TAXI</button>
        <div class="inputs">
            <img src="assets/start-finish.png" style="margin-right:1%;">
            <section class="centro">
                <div><span class="span">De</span><input type="text" class="inputde btn-select"></div>
                <div><span class="span">para</span><input type="text" class="inputpara btn-select"></div>
                <section class="basic-info">
                    <p class="basic-distancia-preco"> KM: 12 km <br><span>Preço: 4 000 kz</span></p>
                    <p class="basic-tempo"> Tempo <br><span>1h20</span></p>
                </section>
                <button class="btn-chamar-taxi">CHAMAR TAXI</button>
                <div class="status-um">
                    <section class="selects">
                        <div>
                            <p>Carro ou moto?</p>
                            <select class="btn-select">
                                <option>Carro</option>
                                <option>Moto</option>
                            </select>
                        </div>
                        <div>
                            <p>Nº de pessoas</p>
                            <select class="btn-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </section>
                    <section class="selects">
                        <div>
                            <p>Categoria</p>
                            <select class="btn-select">
                                <option>Normal</option>
                                <option>VIP</option>
                                <option>Executivo</option>
                            </select>
                        </div>
                        <div>
                            <p>Ida e volta?</p>
                            <select class="btn-select">
                                <option>Não</option>
                                <option>Sim</option>
                            </select>
                        </div>
                    </section>
                </div>
                <div class="cupom status-um">
                    <p class="titulo">TEM CUPOM</p>
                    <p class="descricao">Insira o código do cupom para obter desconto.</p>
                    <input type="text">
                </div>
                
                <div class="concluir status-um">
                    <p class="preco">Preço: 4 000 kz<p>
                    <p class="desconto">Desconto: 0 kz<p>
                    <p class="total">Total: 4 000 kz<p>
                </div>
                 

                <div class="pagamentos">
                    <p class="header">TOTAL 8 6431</p>
                    <p class="descricao">Escolha um método de pagamento</p>
                    <div>
                        <img src="assets/paypal.png"> 
                        <img src="assets/stripe.png"> 
                    </div>
                </div>

                <button class="btn-confirmar-sms">CONFIRMAR POR SMS</button>

                
                <div class="confirmar-sms">
                    <p class="header">TOTAL 8 6431</p>
                    <p class="descricao">POR FAVOR
                    <br>CONFIRME O NÚMERO<br>
                    QUE RECEBEU POR SMS</p>
                    <div>
                        <input type="text" placeholder="Número de verificação">
                    </div>
                </div>

                <button class="btn-concluir-sms">CONFIRMAR E CONCLUIR</button>

            </section>
            <img src="assets/switch.png" class="switch">
        </div>
        <button class="btn-taxi-concluir status-um">CONCLUIR</button>
    </div>
`;

class debliwuicorrida extends HTMLElement {

    constructor(loader) {
        super(loader);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_corrida.content.cloneNode(true));
        this.loader = loader;
    }

    fechar() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }
    abrir() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "block";
    }

    abrirChamarUmFn(esse) {
        let inputs = esse.shadowRoot.querySelector('.inputs');
        let container = esse.shadowRoot.querySelector('.container');
        let btnChamarUm = esse.shadowRoot.querySelector('.btn-chamar-um');

        container.style.background = "#ffffff";
        container.style.boxShadow = "0px 0px 5px 2px rgba(0, 0, 0, 0.25)";
        btnChamarUm.style.display = "none";
        if (inputs.style.display == "flex") {

        } else {
            inputs.style.display = "flex";

        }
    }
    fecharChamarUmFn(esse) {
        let inputs = esse.shadowRoot.querySelector('.inputs');
        let container = esse.shadowRoot.querySelector('.container');
        let btnChamarUm = esse.shadowRoot.querySelector('.btn-chamar-um');

        container.style.background = "none";
        container.style.boxShadow = "none";
        btnChamarUm.style.display = "block";
        if (inputs.style.display == "flex") {
            inputs.style.display = "none";
        } else {


        }
    }

    abrirChamarFn(esse) {
        let inputs = esse.shadowRoot.querySelectorAll('.status-um');
        let chamar = esse.shadowRoot.querySelector('.btn-chamar-taxi');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        inputs.forEach((value, key) => {
            if (value.style.display == "block") {}
            if (value.style.display != "block") {
                chamar.style.display = "none";
                value.style.display = "block";
                concluir.style.display = "block";
            }
        })

    }
    fecharChamarFn(esse) {
        let inputs = esse.shadowRoot.querySelectorAll('.status-um');
        let chamar = esse.shadowRoot.querySelector('.btn-chamar-taxi');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        inputs.forEach((value, key) => {
            if (value.style.display == "block") {

                chamar.style.display = "block";
                value.style.display = "none";
                concluir.style.display = "none";
            }
            if (value.style.display != "block") {}
        })

    }

    abrirConcluirFn(esse) {
        let selects = esse.shadowRoot.querySelectorAll('.btn-select');
        let cupom = esse.shadowRoot.querySelector('.cupom');
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        let divConcluir = esse.shadowRoot.querySelector('.concluir');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        var confirmar = esse.shadowRoot.querySelector('.btn-concluir-sms');

        selects.forEach((value, key) => {
            value.setAttribute("disabled", "disabled");

        });
        concluir.style.display = "none";
        cupom.style.display = "none";
        divConcluir.style.display = "none";
        divConcluirSMS.style.display = "block";
        confirmar.style.display = "block";
    }

    fecharConcluirFn(esse) {
        let selects = esse.shadowRoot.querySelectorAll('.btn-select');
        let cupom = esse.shadowRoot.querySelector('.cupom');
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        let divConcluir = esse.shadowRoot.querySelector('.concluir');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        var confirmar = esse.shadowRoot.querySelector('.btn-concluir-sms');

        selects.forEach((value, key) => {
            value.removeAttribute("disabled");

        });
        concluir.style.display = "block";
        cupom.style.display = "block";
        divConcluir.style.display = "block";
        divConcluirSMS.style.display = "none";
        confirmar.style.display = "none";
    }

    abrirConfirmarFn(esse) {
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        var concluir = esse.shadowRoot.querySelector('.btn-concluir-sms');
        var confirmar = esse.shadowRoot.querySelector('.btn-confirmar-sms');

        confirmar.style.display = "none";
        divConcluirSMS.style.display = "block";
        concluir.style.display = "block";
    }
    fecharConfirmarFn(esse) {
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        var concluir = esse.shadowRoot.querySelector('.btn-concluir-sms');

        divConcluirSMS.style.display = "none";
        concluir.style.display = "none";
    }

    abrirConcluirSMSFn(esse) {
        esse.loader.abrir();
        esse.fechar();
        //vaiTela("/taxiacaminho");
        localStorage.setItem("corridapendente", "sim");
        esse.loader.fechar();
    }


    connectedCallback() {
        var esse = this;
        var container = this.shadowRoot.querySelector('.container');
        var btnChamarUm = this.shadowRoot.querySelector('.btn-chamar-um');
        var chamar = this.shadowRoot.querySelector('.btn-chamar-taxi');
        var concluir = this.shadowRoot.querySelector('.btn-taxi-concluir');
        var confirmar = this.shadowRoot.querySelector('.btn-confirmar-sms');
        var concluirSMS = this.shadowRoot.querySelector('.btn-concluir-sms');

        //console.log(chamar, concluir, container);

        btnChamarUm.addEventListener("click", function() {
            vaiTela("#chamarumtaxi");
        });
        chamar.addEventListener("click", function() {
            vaiTela("#chamarotaxi");
        });
        concluir.addEventListener("click", function() {
            vaiTela("#concluirpedidodotaxi");
        })
        confirmar.addEventListener("click", function() {
            vaiTela("#confirmarpedidodotaxi");
        })
        concluirSMS.addEventListener("click", function() {
            vaiTela("#pedidoconcluido");
        })

    }



}

window.customElements.define('debliwui-corrida', debliwuicorrida)