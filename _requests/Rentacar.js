class Rentacar {
    constructor(jquery, apiUrl, loader, notificacao) {
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    poeschroller(elementos) {

        var schroller = document.createElement("div");
        schroller.setAttribute("class", "schroller");

        var rouller = document.createElement("div");
        rouller.setAttribute("class", "rouller");
        var width = (elementos.length) * 230;
        rouller.style.width = width + "px";


        elementos.forEach(element => {
            var api = (this.apiUrl).replace("Passageiro", "Rentacar");
            var foto = JSON.parse(element["fotos"])[0];
            var marca = element.marca;
            var preco = formataPreco(Number(element.preco));

            var cardTemplate = document.createElement("div");
            cardTemplate.setAttribute("class", "card-rentacar");
            cardTemplate.innerHTML = `
                <div class="card-container">
                    <button>Alugar agora</button>
                    <img src="${api}/Carro/foto/${foto}" alt="">
                    <div class="card-bottom">
                        <p>${marca}</p>
                        <p>kz ${preco} / dia</p>
                    </div>
                </div>`;

            cardTemplate.addEventListener("click", function () {
                localStorage.setItem("abrirCarro", JSON.stringify(element));
                vaiTela("/car");
            });
            rouller.append(cardTemplate);
        });


        schroller.append(rouller);
        //document.querySelector("#cards-carros").innerHTML = "";

        document.querySelector("#cards-carros").append(schroller);

    }
    poeNormal(elementos) {
        elementos.forEach(element => {
            var api = (this.apiUrl).replace("Passageiro", "Rentacar");
            var foto = JSON.parse(element["fotos"])[0];
            var marca = element.marca;
            var preco = formataPreco(Number(element.preco));

            var cardTemplate = document.createElement("div");
            cardTemplate.setAttribute("class", "card-rentacar-grande");
            cardTemplate.innerHTML =
                `<div class="card-container">
                    <button>Alugar agora</button>
                    <img src="${api}/Carro/foto/${foto}" alt="">
                    <div class="card-bottom">
                        <p>${marca}</p>
                        <p>kz ${preco} / dia</p>
                    </div>
                </div>`;

            cardTemplate.addEventListener("click", function () {
                localStorage.setItem("abrirCarro", JSON.stringify(element));
                vaiTela("/car");
            });
            document.querySelector("#cards-carros").innerHTML = "";
            document.querySelector("#cards-carros").append(cardTemplate);
        });
    }


    meteDuas(dados) {
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        for (let i = 0; i < tamanho; i += dobra) {
            res.push(dados.slice(i, i + dobra));
        }


        if (!(res[0].length % 2)) {
            this.poeschroller(res[1]);
            this.poeNormal(res[0]);
            return;
        }

        if (res[1].length % 2) {
            var arrayUm = res[0];
            var arrayDois = res[1];

            var arrayNovo = [arrayDois[0], ...arrayUm];
            this.poeschroller(arrayNovo);
            arrayDois.shift();
            this.poeNormal(arrayDois);
            return;
        }

        if (!(res[1].length % 2)) {
            this.poeschroller(res[0]);
            this.poeNormal(res[1]);
            return;
        }

        console.log(res);
    }



    getCarros() {

        var carros = JSON.parse(localStorage.getItem("carros"));
        var dados = (carros.payload);
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        this.trataArray(dados, res);
        console.log(res);

        document.querySelector("#cards-carros").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            this.poeschroller(res[i]);
        }
    }

    trataArray(dados, arrayContatenar) {
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        for (let i = 0; i < tamanho; i += dobra) {
            res.push(dados.slice(i, i + dobra));
        }
        if (res[0].length > 12) {
            this.trataArray(res[0], arrayContatenar);
        } else {
            arrayContatenar.push(res[0]);
        }
        if (res[1].length > 12) {
            this.trataArray(res[1], arrayContatenar);
        } else {
            arrayContatenar.push(res[1]);
        }
    }


    verCarro() {
        var api = (this.apiUrl).replace("Passageiro", "Rentacar");
        var carro = JSON.parse(localStorage.getItem("abrirCarro"));
        console.log(carro);

        var veiculoFotos = JSON.parse(carro.fotos);

        var fotosVeiculo = [];
        veiculoFotos.forEach(function (element) {
            fotosVeiculo.push(`<img src="${api}/Carro/foto/${element}">`);
        });
        var sli = new debliwuislideimg((this.jquery), fotosVeiculo);
        document.querySelector("#fotos").append(sli);



        var marca = carro.marca;
        var modelo = carro.modelo;
        var cor = carro.cor;
        var preco = formataPreco(Number(carro.preco));
        var action = document.createElement("div");
        action.setAttribute("class", "action");
        action.innerHTML = `
            <button>ALUGAR AGORA</button>
            <div>
                <p>${marca} - ${modelo} <br> ${cor}</p>
                <p>kz <b>${preco}</b> / dia</p>
            </div>`;

        action.querySelector("button").addEventListener("click", function () {
            vaiTela("/rent");
        })
        document.querySelector(".prod-top").append(action);


        var especificacoes = JSON.parse(carro.especificacoes);

        var lugares = especificacoes.lugares;
        var motor = especificacoes.motor;
        var pneus = especificacoes.pneus;
        var volante = especificacoes.volante;
        var portas = especificacoes.portas;

        var spec = document.createElement("div");
        spec.setAttribute("class", "rouller");
        spec.style.width = "575px";
        spec.innerHTML = `<div class="info">
                <img src="assets/cadeira.svg" alt="">
                <p>${lugares} lugares</p>
            </div>
            <div class="info">
                <img src="assets/porta.svg" alt="">
                <p>${portas} portas</p>
            </div>
            <div class="info">
                <img src="assets/motor.svg" alt="">
                <p>${motor}</p>
            </div>
            <div class="info">
                <img src="assets/volante.svg" alt="">
                <p>${volante}</p>
            </div>
            <div class="info">
                <img src="assets/pneu.svg" alt="">
                <p>${pneus}</p>
            </div>`;

        document.querySelector("#especificacoes").append(spec);

        var rentacar = (carro.rentacar);
        var nome = rentacar.nome;
        var sobre = rentacar.sobre;

        document.querySelector(".descricao").innerHTML = `
                <h3>${nome}</h3>
                <p>${sobre}</p>
            `;
    }

    rent() {
        var esse = this;
        var carro = JSON.parse(localStorage.getItem("abrirCarro"));
        console.log(carro);




        var marca = carro.marca;
        var modelo = carro.modelo;
        var cor = carro.cor;
        var preco = formataPreco(Number(carro.preco));

        document.querySelector(".nome-carro").innerHTML = `
                <p>${marca} - ${modelo} <br> ${cor}</p>`;

        document.querySelector(".preco span").innerHTML = `
                <b>${preco}</b> / dia`;

        document.querySelector("#concluir-rent").addEventListener("click", function () {
            vaiTela("/rent");
        })



        var especificacoes = JSON.parse(carro.especificacoes);

        var lugares = especificacoes.lugares;
        var motor = especificacoes.motor;
        var pneus = especificacoes.pneus;
        var volante = especificacoes.volante;
        var portas = especificacoes.portas;

        var spec = document.createElement("div");
        spec.setAttribute("class", "rouller");
        spec.style.width = "575px";
        spec.innerHTML = `<div class="info">
                <img src="assets/cadeira.svg" alt="">
                <p>${lugares} lugares</p>
            </div>
            <div class="info">
                <img src="assets/porta.svg" alt="">
                <p>${portas} portas</p>
            </div>
            <div class="info">
                <img src="assets/motor.svg" alt="">
                <p>${motor}</p>
            </div>
            <div class="info">
                <img src="assets/volante.svg" alt="">
                <p>${volante}</p>
            </div>
            <div class="info">
                <img src="assets/pneu.svg" alt="">
                <p>${pneus}</p>
            </div>`;

        document.querySelector("#especificacoes").append(spec);


        document.querySelector("#precoDia").value = (Number(carro.preco));

        document.querySelector("#inicio").addEventListener("change", function () {
            var dataFinal = esse.formataData(this.value);
            document.querySelector("#inicioFormatado").value = dataFinal;
            console.log(this.value);
        });
        document.querySelector("#fim").addEventListener("change", function () {
            var dataFinal = esse.formataData(this.value);
            var inicio = document.querySelector("#inicioFormatado").value;

            if(inicio == "0"){
                esse.notificacao.sms("Precisa de uma data inicial",1);
                return;
            }
            if(inicio >= dataFinal){
                esse.notificacao.sms("As datas de aluguer são inválidas",1);
                return;
            }
            if(inicio < dataFinal){
                var dias = (dataFinal-inicio);
                var preco = Number(document.querySelector("#precoDia").value);
                var total = formataPreco(dias*preco)
                console.log(total);
                document.querySelector(".total span").innerHTML = `
                <b>${total}</b>`;
                document.querySelector(".desconto span").innerHTML = `
                <b>${dias}</b>`;
                return;
            }
            
            document.querySelector("#fimFormatado").value = dataFinal;
            console.log(inicio);
        });

    }
    formataData(data) {
        var dat = data;
        var dataFormatada = dat.replaceAll("-", "");
        return Number(dataFormatada);
    }

}

