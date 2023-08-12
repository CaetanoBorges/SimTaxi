class Corrida {
    constructor(jquery, apiUrl, loader, notificacao) {
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }


    pegaIdCorridaAtual() {
        var json = localStorage.getItem("abrirCorrida");
        var obj = JSON.parse(json);
        return obj.corrida.identificador
    }
    manejaClassificacao(idCorridaAtual, objClassificacaoNova) {
        var json = localStorage.getItem("corridas");
        var obj = JSON.parse(json);

        (obj.payload).forEach(function (el) {
            if (el.corrida.identificador == idCorridaAtual) {
                el.classificacao = objClassificacaoNova;
            }

        });
        localStorage.setItem("corridas",JSON.stringify(obj));
    }
    verCorridas() {
        var corridas = JSON.parse(localStorage.getItem("corridas"));
        document.querySelector("#corridas").innerHTML = "";
        var qtd = (corridas.payload).length;
        var info = new debliwuiinfo({ nome: "CORRIDAS", qtd: qtd });
        document.querySelector("#corridas").append(info);

        (corridas.payload).forEach(element => {
            var card = new debliwuicorridas(element);
            document.querySelector("#corridas").append(card);
        });

    }

    verCorrida() {
        var corrida = JSON.parse(localStorage.getItem("abrirCorrida"));

        var distancia = corrida.corrida.distancia;
        var tempo = corrida.corrida.tempo;
        var carromoto = (corrida.corrida.carromoto) ? "Moto" : "Carro";
        var npessoas = corrida.corrida.npessoas;
        var partida = corrida.corrida.partida;
        var destino = corrida.corrida.destino;
        var total = formataPreco(Number(corrida.corrida.total)) + " kz";
        var idavolta = (corrida.corrida.idavolta) ? "Sim" : "Nao";

        var template = document.createElement('div');
        template.innerHTML =
            `<p class="pdistancia">Distância: ${distancia}</p>
            <p class="ptempo">Tempo de viagem: ${tempo}</p>
            <p>Moto ou carro: ${carromoto}</p>
            <p>Nº de pessoas: ${npessoas}</p>
            <p>Ida e volta: ${idavolta}</p>
            <p>Total: ${total}</p>`;

        document.querySelector("#detalhes").innerHTML = "";
        document.querySelector("#detalhes").append(template);
        document.querySelector("#partida").innerHTML = partida;
        document.querySelector("#destino").innerHTML = destino;


        var chat = ``;
        (corrida.chat).forEach(element => {
            var data = timestampToDate(Number(element.quando));
            if (element.eu) {
                chat += `<p class="right">
                <span class="quem">${element.emissor}</span>
                <span class="sms">${element.mensagem}</span>
                <span class="quando">${data}</span>
            </p>`;
            } else {
                chat += `<p class="left">
                <span class="quem">${element.emissor}</span>
                <span class="sms">${element.mensagem}</span>
                <span class="quando">${data}</span>
            </p>`;
            }
        });
        document.querySelector("#mensagens").innerHTML = chat;


        localStorage.setItem("abrirMotorista", (JSON.stringify(corrida.motorista)));
        localStorage.setItem("abrirClassificacao", (JSON.stringify(corrida.classificacao)));

        localStorage.setItem("abrirVeiculo", (JSON.stringify(corrida.veiculo)));
        localStorage.removeItem("thumbsStatus");
    }

    verMotorista() {
        var api = (this.apiUrl).replace("Passageiro", "Motorista");

        var motorista = JSON.parse(localStorage.getItem("abrirMotorista"));
        var classificacao = JSON.parse(localStorage.getItem("abrirClassificacao"));
        var veiculo = JSON.parse(localStorage.getItem("abrirVeiculo"));
        var veiculoFotos = JSON.parse(veiculo.fotos);

        var fotosVeiculo = [];
        veiculoFotos.forEach(function (element) {
            fotosVeiculo.push(`<img src="${api}/Veiculo/foto/${element}">`);
        });

        localStorage.setItem("motorista", motorista.identificador);
        var nome = motorista.nome;
        var genero = motorista.genero;
        var foto = motorista.foto;
        document.querySelector("#nomegenero").innerHTML = `<p>Nome: ${nome}</p><p class="genero">Genero:  ${genero}</p>`;
        document.querySelector("#foto").innerHTML = `<img src="${api}/Conta/foto/${foto}">`;

        var matricula = veiculo.matricula;
        var marca = veiculo.marca;
        var cor = veiculo.cor;
        var modelo = veiculo.modelo;
        var tipo = veiculo.tipo;

        var fichaTecnica = document.createElement('div');
        fichaTecnica.innerHTML =
            `<p>Matricula: ${matricula}</p>
                <p>Marca: ${marca}</p>
                <p>Cor: ${cor}</p>
                <p>Modelo: ${modelo}</p>
                <p>Tipo: ${tipo}</p>`;
        document.querySelector(".ficha-tecnica").append(fichaTecnica);



        var sli = new debliwuislideimg((this.jquery), fotosVeiculo);
        document.querySelector(".imagens").append(sli);

        document.querySelector("#reacaonegativa").innerHTML = classificacao.mau;
        document.querySelector("#reacaopositiva").innerHTML = classificacao.bom;

        var thumbsDown = document.querySelector(".thumbs-down");
        var thumbsUp = document.querySelector(".thumbs-up");
        if (classificacao.votei.votei) {

            if (classificacao.votei.voto) {
                var status = localStorage.getItem("thumbsStatus");;

                if (status == null || status == "null") {
                    localStorage.setItem("thumbsStatus", "1");
                    thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
                    return;
                }
                if (status == "0") {
                    localStorage.setItem("thumbsStatus", "1");
                    thumbsDown.setAttribute("src", "assets/thumbs-down-regular.svg");
                    thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
                    return;
                }
            } else {
                var status = localStorage.getItem("thumbsStatus");;

                if (status == null || status == "null") {
                    localStorage.setItem("thumbsStatus", "0");
                    thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
                    return;
                }
                if (status == "1") {
                    localStorage.setItem("thumbsStatus", "0");
                    thumbsUp.setAttribute("src", "assets/thumbs-up-regular.svg");
                    thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
                    return;
                }
            }
        }
    }
    classificarMotorista() {
        var jquery = this.jquery;
        var api = this.apiUrl;
        var token = localStorage.getItem("token");
        var motorista = localStorage.getItem("motorista");
        var thumbStatus = localStorage.getItem("thumbsStatus");
        var thumbsDown = document.querySelector(".thumbs-down");
        var thumbsUp = document.querySelector(".thumbs-up");
        var esse = this;


        var neg = document.querySelector("#reacaonegativa");
        var pos = document.querySelector("#reacaopositiva");

        if (thumbStatus == null || thumbStatus == "null") {

        }
        if (thumbStatus == "0") {
            thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
        }
        if (thumbStatus == "1") {
            thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
        }
        thumbsDown.addEventListener("click", function () {
            
            var status = localStorage.getItem("thumbsStatus");

            if (status == null || status == "null") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 0 }).done(function (d) {
                    console.log(d);
                });
                neg.innerHTML = "1";

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: 0, mau: 1, votei: { votei: true, voto: false } }
                esse.manejaClassificacao(idCorridaAtual,objClassificacaoNova);
                localStorage.setItem("thumbsStatus", "0");
                thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
                return;
            }
            if (status == "1") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 0 }).done(function (d) {
                    console.log(d);
                });
                var valorNeg = Number(neg.innerHTML);
                var valorPos = Number(pos.innerHTML);

                var bom = (valorPos - 1);
                var mau = (valorNeg + 1);
                pos.innerHTML = bom;
                neg.innerHTML = mau;

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: bom, mau: mau, votei: { votei: true, voto: false } }
                esse.manejaClassificacao(idCorridaAtual,objClassificacaoNova);
                localStorage.setItem("thumbsStatus", "0");
                thumbsUp.setAttribute("src", "assets/thumbs-up-regular.svg");
                thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
                return;
            }
        });
        thumbsUp.addEventListener("click", function () {
            
            var status = localStorage.getItem("thumbsStatus");;

            if (status == null || status == "null") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 1 }).done(function (d) {
                    console.log(d);
                });
                pos.innerHTML = "1";

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: 1, mau: 0, votei: { votei: true, voto: true } }
                esse.manejaClassificacao(idCorridaAtual,objClassificacaoNova);
                localStorage.setItem("thumbsStatus", "1");
                thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
                return;
            }
            if (status == "0") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 1 }).done(function (d) {
                    console.log(d);
                });

                var valorNeg = Number(neg.innerHTML);
                var valorPos = Number(pos.innerHTML);

                var bom = (valorPos + 1);
                var mau = (valorNeg - 1);
                pos.innerHTML = bom;
                neg.innerHTML = mau;

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: bom, mau: mau, votei: { votei: true, voto: true } }
                esse.manejaClassificacao(idCorridaAtual,objClassificacaoNova);

                localStorage.setItem("thumbsStatus", "1");
                thumbsDown.setAttribute("src", "assets/thumbs-down-regular.svg");
                thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
                return;
            }
        });
    }


}

