const HOME = {
    "smsschrol": false,
    "corridaStatus": function() {
        setInterval(() => {

            if ((window.location.pathname) == "/") {
                INICIO.slide();
            }
            if ((window.location.pathname) != "/home") {
                menu.fechar();
                corrida.fechar();
                pesquisa.fechar();
                btncorrida.fechar();
                fechaBarraDePesquisas();
            }
            if ((window.location.pathname) == "/home") {
                
                var corridaAtiva = localStorage.getItem("corridaativa");
                var corridaPendente = localStorage.getItem("corridapendente");
                
                abreBarraDePesquisas();

                if (corridaAtiva != "sim" && corridaPendente != "sim") {
                    corrida.abrir();
                    //pesquisa.abrir();
                    
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
            if ((window.location.pathname) == "/conta") {
                menu.abrir();
            }
            if ((window.location.pathname) == "/rentacar") {
                menu.abrir();
            }
            if ((window.location.pathname) == "/car") {
                menu.abrir();
            }
            
            if ((window.location.pathname) == "/rent") {
                menu.abrir();
            }
            if ((window.location.pathname) == "/corridas") {
                menu.abrir();
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
            if ((window.location.pathname) == "/definicoes") {
                menu.abrir();
            }
        }, 10)
    },
    "fechaCorridaPendente": function() {
        if (document.querySelector(".corrida-pendente")) {
            document.querySelector(".corrida-pendente").style.display = "none";
        }

    },
    "abreCorridaPendente": function() {
        if (document.querySelector(".corrida-pendente")) {
            document.querySelector(".corrida-pendente").style.display = "block";
        }

    }
}