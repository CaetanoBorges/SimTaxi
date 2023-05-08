const debliwui_pendente = document.createElement('template');

debliwui_pendente.innerHTML = `
    <style>
   
/*! lightslider - v1.1.3 - 2015-04-14
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2015 Sachin N; Licensed MIT */

.lSSlideWrapper,
.lSSlideWrapper .lSFade {
    position: relative
}

.lSSlideWrapper .lSSlide,
.lSSlideWrapper.usingCss .lSFade>* {
    -webkit-transition-timing-function: inherit !important;
    transition-timing-function: inherit !important;
    -webkit-transition-duration: inherit !important;
    transition-duration: inherit !important
}

.lSSlideOuter,
.lSSlideOuter .lSPager.lSGallery {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none
}

.lSSlideOuter .lSPager.lSGallery:after,
.lSSlideWrapper>.lightSlider:after {
    clear: both
}

.lSSlideOuter {
    overflow: hidden;
    user-select: none
}

.lightSlider:after,
.lightSlider:before {
    content: " ";
    display: table
}

.lightSlider {
    overflow: hidden;
    margin: 0
}

.lSSlideWrapper {
    max-width: 100%;
    overflow: hidden
}

.lSSlideWrapper .lSSlide {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: all 1s;
    -webkit-transition-property: -webkit-transform, height;
    -moz-transition-property: -moz-transform, height;
    transition-property: transform, height
}

.lSSlideWrapper .lSFade>* {
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 9;
    margin-right: 0;
    width: 100%
}

.lSSlideWrapper.usingCss .lSFade>* {
    opacity: 0;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transition-property: opacity;
    transition-property: opacity
}

.lSSlideWrapper .lSFade>.active {
    z-index: 10
}

.lSSlideWrapper.usingCss .lSFade>.active {
    opacity: 1
}

.lSSlideOuter .lSPager.lSpg {
    margin: 10px 0 0;
    padding: 0;
    text-align: center
}

.lSSlideOuter .lSPager.lSpg>li {
    cursor: pointer;
    display: inline-block;
    padding: 0 5px
}

.lSSlideOuter .lSPager.lSpg>li a {
    background-color: #222;
    border-radius: 30px;
    display: inline-block;
    height: 8px;
    overflow: hidden;
    text-indent: -999em;
    width: 8px;
    position: relative;
    z-index: 99;
    -webkit-transition: all .5s linear 0s;
    transition: all .5s linear 0s
}

.lSSlideOuter .lSPager.lSpg>li.active a,
.lSSlideOuter .lSPager.lSpg>li:hover a {
    background-color: #428bca
}

.lSSlideOuter .media {
    opacity: .8
}

.lSSlideOuter .media.active {
    opacity: 1
}

.lSSlideOuter .lSPager.lSGallery {
    list-style: none;
    padding-left: 0;
    margin: 0;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    user-select: none
}

.lSSlideOuter .lSPager.lSGallery li {
    overflow: hidden;
    -webkit-transition: border-radius .12s linear 0s .35s linear 0s;
    transition: border-radius .12s linear 0s .35s linear 0s
}

.lSSlideOuter .lSPager.lSGallery li.active,
.lSSlideOuter .lSPager.lSGallery li:hover {
    border-radius: 5px
}

.lSSlideOuter .lSPager.lSGallery img {
    display: block;
    height: auto;
    max-width: 100%
}

.lSSlideOuter .lSPager.lSGallery:after,
.lSSlideOuter .lSPager.lSGallery:before {
    content: " ";
    display: table
}

.lSAction>a {
    width: 32px;
    display: block;
    top: 50%;
    height: 32px;
    background-image: url(../img/controls.png);
    cursor: pointer;
    position: absolute;
    z-index: 99;
    margin-top: -16px;
    opacity: .5;
    -webkit-transition: opacity .35s linear 0s;
    transition: opacity .35s linear 0s
}

.lSAction>a:hover {
    opacity: 1
}

.lSAction>.lSPrev {
    background-position: 0 0;
    left: 10px
}

.lSAction>.lSNext {
    background-position: -32px 0;
    right: 10px
}

.lSAction>a.disabled {
    pointer-events: none
}

.cS-hidden {
    height: 1px;
    opacity: 0;
    filter: alpha(opacity=0);
    overflow: hidden
}

.lSSlideOuter.vertical {
    position: relative
}

.lSSlideOuter.vertical.noPager {
    padding-right: 0 !important
}

.lSSlideOuter.vertical .lSGallery {
    position: absolute !important;
    right: 0;
    top: 0
}

.lSSlideOuter.vertical .lightSlider>* {
    width: 100% !important;
    max-width: none !important
}

.lSSlideOuter.vertical .lSAction>a {
    left: 50%;
    margin-left: -14px;
    margin-top: 0
}

.lSSlideOuter.vertical .lSAction>.lSNext {
    background-position: 31px -31px;
    bottom: 10px;
    top: auto
}

.lSSlideOuter.vertical .lSAction>.lSPrev {
    background-position: 0 -31px;
    bottom: auto;
    top: 10px
}

.lSSlideOuter.lSrtl {
    direction: rtl
}

.lSSlideOuter .lSPager,
.lSSlideOuter .lightSlider {
    padding-left: 0;
    list-style: none
}

.lSSlideOuter.lSrtl .lSPager,
.lSSlideOuter.lSrtl .lightSlider {
    padding-right: 0
}

.lSSlideOuter .lSGallery li,
.lSSlideOuter .lightSlider>* {
    float: left
}

.lSSlideOuter.lSrtl .lSGallery li,
.lSSlideOuter.lSrtl .lightSlider>* {
    float: right !important
}

@-webkit-keyframes rightEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: -15px
    }
}

@keyframes rightEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: -15px
    }
}

@-webkit-keyframes topEnd {
    0%,
    100% {
        top: 0
    }
    50% {
        top: -15px
    }
}

@keyframes topEnd {
    0%,
    100% {
        top: 0
    }
    50% {
        top: -15px
    }
}

@-webkit-keyframes leftEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: 15px
    }
}

@keyframes leftEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: 15px
    }
}

@-webkit-keyframes bottomEnd {
    0%,
    100% {
        bottom: 0
    }
    50% {
        bottom: -15px
    }
}

@keyframes bottomEnd {
    0%,
    100% {
        bottom: 0
    }
    50% {
        bottom: -15px
    }
}

.lSSlideOuter .rightEnd {
    -webkit-animation: rightEnd .3s;
    animation: rightEnd .3s;
    position: relative
}

.lSSlideOuter .leftEnd {
    -webkit-animation: leftEnd .3s;
    animation: leftEnd .3s;
    position: relative
}

.lSSlideOuter.vertical .rightEnd {
    -webkit-animation: topEnd .3s;
    animation: topEnd .3s;
    position: relative
}

.lSSlideOuter.vertical .leftEnd {
    -webkit-animation: bottomEnd .3s;
    animation: bottomEnd .3s;
    position: relative
}

.lSSlideOuter.lSrtl .rightEnd {
    -webkit-animation: leftEnd .3s;
    animation: leftEnd .3s;
    position: relative
}

.lSSlideOuter.lSrtl .leftEnd {
    -webkit-animation: rightEnd .3s;
    animation: rightEnd .3s;
    position: relative
}

.lightSlider.lsGrab>* {
    cursor: -webkit-grab;
    cursor: -moz-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
    cursor: grab
}

.lightSlider.lsGrabbing>* {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: -o-grabbing;
    cursor: -ms-grabbing;
    cursor: grabbing
}

 .slider{
        width:100%;
        height:fit-content;
        background: #fff;
        /*border:1px solid #ff008f;*/
        position: relative;
       
}
.slider li{
        display: block;
        width: 100%;

}
.slider img{
        width: 100%;
}

@media screen and (max-width:1000px) {
   
    
}
/* TERMINA CSS SLIDE */

/* COMECA CSS DO RESTO */
.btn-aceitar-regeitar{
    width: 62px;
    height: 42px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    cursor: pointer;
}
.okay{
    background: #2FD913;
}
.nao{
    background: #ff0000;
}
 .detalhesveiculo {
        margin-top: 5vh;
    }
    
    .detalhes {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .detalhes .ficha-tecnica p {
        font-size: 12px;
        line-height: 15px;
        margin: 0 0 4px 0;
    }
    
    .detalhes .imagens {
        width: 50%;
    }
    
    .detalhes .imagens img {
        width: 100%;
    }
    
    .detalhesveiculo h3 {
        padding: 1vh 0;
        background: rgba(217, 217, 217, 0.45);
        text-align: center;
    }
    
    .descricao {
        display: flex;
        justify-content: space-between;
    }
    
    .classificacao {
        display: flex;
        justify-content: space-between;
    }
    
    .classificacao .reagir {
        display: flex;
        width: 50%;
        justify-content: space-between;
    }
    
    .classificacao .reagir img {
        width: 42px;
        height: 42px;
        cursor: pointer;
    }
    
    .classificacao .reacoes {
        display: flex;
        width: 32%;
        justify-content: space-between;
        font-size: 12px;
    }
    
    .classificacao .reacoes p {
        margin: 0;
    }
    
    .classificacao .reacoes img {
        width: 20px;
        height: 20px;
    }
        
    .card {
        width: 90%;
        padding: 5%;
        background: #D9D9D9;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    
    .card .identificacao {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-around;
    }
    
    .card .identificacao img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    
    .card .identificacao p {
        margin: 2px 0;
        font-size: 12px;
        line-height: 15px;
    }
</style>
    <div class="card">
        <div class="identificacao">
            <img src="assets/foto.png" alt="">
            <div>
                <p>Nome: NOME DO MOTORISTA</p>
                <p>Genero: Masculino</p>
                <p>Nascimento: 1989</p>
            </div>
        </div>


        <div class="classificacao">
            <div class="reacoes">
                <div>
                    <img src="assets/thumbs-down-reacoes.svg" alt="">
                    <p>134</p>
                </div>

                <div>
                    <img src="assets/thumbs-up-reacoes.svg" alt="">
                    <p>134</p>
                </div>
            </div>
            <div class="reagir">
                <div class="okay btn-aceitar-regeitar">
                    OKAY
                </div>
                <div class="nao btn-aceitar-regeitar">
                    NAO
                </div>
            </div>
        </div>

        <div class="detalhesveiculo">
            <div class="detalhes">
                <div class="ficha-tecnica">
                    <p>Matricula: LDA-29-98</p>
                    <p>Marca: Toyota</p>
                    <p>Cor: Branco</p>
                    <p>Modelo: Hilux L200</p>
                    <p>Tipo: Carro</p>
                </div>
                <div class="imagens" id="">
                    <ul class="slider">
        
                    </ul>
                </div>
            </div>
        </div>

    </div>

    
    
`;



class debliwuipendente extends HTMLElement {

    constructor($, imagens, mostrarquantos = 1) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_pendente.content.cloneNode(true));

        this.jquery = $;
        this.imagens = imagens;
        this.itens = mostrarquantos;

    }

    connectedCallback() {
        var esse = this;
        var slider = this.shadowRoot.querySelector('.slider');

        this.imagens.forEach((element, key) => {
            if (typeof(element) == "string") {
                $(slider).append(`<li>${element}</li>`);
            } else {

            }

        });


        var slider = $(slider).lightSlider({
            gallery: false,
            item: esse.itens,
            speed: 800,
            loop: true,
            keyPress: true,
            auto: true,
            controls: false,
            pager: true,
            pauseOnHover: true,
            pause: 2000,
            adaptiveHeight: true,
            onSliderLoad: function() {
                $(slider).removeClass('cS-hidden');
            }
        }).css("z-index", "0");


    }

}

window.customElements.define('debliwui-pendente', debliwuipendente)