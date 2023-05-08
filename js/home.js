const HOME = {
    "smsschrol": false,
    "corridaStatus": function() {
        setInterval(() => {

            if ((window.location.pathname) != "/") {
                menu.fechar();
                corrida.fechar();
                pesquisa.fechar();
                btncorrida.fechar();
            }
            if ((window.location.pathname) == "/") {
                var corridaAtiva = localStorage.getItem("corridaativa");
                var corridaPendente = localStorage.getItem("corridapendente");

                if (corridaAtiva != "sim" && corridaPendente != "sim") {
                    corrida.abrir();
                    pesquisa.abrir();
                    this.fechaCorridaPendente();
                }
                if (corridaAtiva == "sim") {
                    btncorrida.abrir();
                    corrida.fechar();
                    pesquisa.fechar();
                    this.fechaCorridaPendente();
                }
                if (corridaPendente == "sim") {
                    btncorrida.fechar();
                    corrida.fechar();
                    pesquisa.fechar();
                    this.abreCorridaPendente();
                }
                menu.abrir();


                this.smsschrol = false;

            }
            if ((window.location.pathname) == "/motorista") {

                menu.abrir();
                this.smsschrol = false;

            }
            if ((window.location.pathname) == "/corrida") {

                if (document.querySelector(".mensagens")) {
                    if (this.smsschrol == false) {
                        this.smsschrol = true;
                        var height = document.querySelector(".mensagens").scrollHeight;
                        document.querySelector(".mensagens").scrollTo(0, height);

                    }
                }


            }
        }, 10)
    },
    "fechaCorridaPendente": function() {
        document.querySelector(".corrida-pendente").style.display = "none";
    },
    "abreCorridaPendente": function() {
        if (document.querySelector(".corrida-pendente")) {
            document.querySelector(".corrida-pendente").style.display = "block";
        }

    }
}