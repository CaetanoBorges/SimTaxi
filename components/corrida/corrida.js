const debliwui_corrida = document.createElement('template');
debliwui_corrida.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:80%;
            padding: 45px 10%;
            height:50px;
            left: 0;
            bottom:0;
            background: #FFFFFF;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius:50px 50px 0 0;
            z-index: 10000;
        }
        
    </style>

    <div class="container">
        <div class="inputs">
            <img src="assets/start-finish.png">
            <div><span>De</span><input type="text"></div>
            <div><span>para</span><input type="text"></div>
            <img src="assets/switch.png">
        </div>
    </div>
`;

class debliwuicorrida extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_corrida.content.cloneNode(true));
    }



    connectedCallback() {
        var esse = this;



    }



}

window.customElements.define('debliwui-corrida', debliwuicorrida)