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
                localStorage.setItem("abrirCarro", element);
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
                localStorage.setItem("abrirCarro", element);
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
        this.trataArray(dados,res);
        console.log(res);
        
        document.querySelector("#cards-carros").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            this.poeschroller(res[i]);
        }
    }

    trataArray(dados,arrayContatenar)
    {
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        for (let i = 0; i < tamanho; i += dobra) {
            res.push(dados.slice(i, i + dobra));
        }
        if(res[0].length > 12) {
            this.trataArray(res[0],arrayContatenar);
        }else{
            arrayContatenar.push(res[0]);
        }
        if(res[1].length > 12) {
            this.trataArray(res[1],arrayContatenar);
        }else{
            arrayContatenar.push(res[1]);
        }
    }

}

