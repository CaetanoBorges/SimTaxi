const debliwui_notificacao = document.createElement('template');
debliwui_notificacao.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:94%;
            left: 3%;
            bottom:1.5vh;
            height:fit-content;
            background: #fff;
            border:1px solid #ff008f;
            z-index: 10000;
            border-radius:10px;
        }
        

        .header{
            
            position:relative;
            width:100%;
            height:fit-content;
            font-size:17px;
        }
       #fechar{position: absolute; top: 10px;right:10px;background:#ff008f;width:15px;height:15px;border-radius:7.5px}
       #fechar:hover{width:10px;height:10px;border-radius:5px;top:12.5px;right:12.5px;opacity:.5}
       #sms{display:flex;justify-content:center;align-items:center;padding:1vh 5%;font-size:20px}
    </style>

    <div class="container">
        <div class="header">
        <span id="fechar"></span>
        <div id="sms">
        <slot name="notificacao"></slot>
        </div>
        </div>
    </div>
`;

class debliwuinotificacao extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_notificacao.content.cloneNode(true));
    }

    fechar(esse) {
        let container = esse.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }

    connectedCallback() {
        var esse = this;
        var fechar = this.fechar;
        this.shadowRoot.querySelector('#fechar').addEventListener("click", function() {
            fechar(esse);
        });

        setTimeout(function() {
            fechar(esse);
        }, 10000);
    }

    sms(qual) {
        let sms = this.shadowRoot.querySelector('#sms');
        sms.innerHTML = qual;
    }


}

window.customElements.define('debliwui-notificacao', debliwuinotificacao)