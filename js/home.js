const HOME = {
    "smsschrol": false,
    "corridaStatus": function() {
        setInterval(() => {
            if ((window.location.pathname) == "/") {
                var corridaStatus = localStorage.getItem("corridaativa");

                if (corridaStatus != "sim") {
                    corrida.abrir();
                }
                if (corridaStatus == "sim") {
                    btncorrida.abrir();
                    corrida.fechar();
                }
                menu.abrir();
                pesquisa.abrir();

                this.smsschrol = false;

            }
            if ((window.location.pathname) == "/corrida") {

                if (document.querySelector(".mensagens")) {
                    if (this.smsschrol == false) {
                        this.smsschrol = true;
                        document.querySelector(".mensagens").scrollTo(0, 66);
                        var corridaButtons = document.querySelector(".corrida-buttons");
                        //corridaButtons.append(window.btnmotorista);
                    }
                }


            }
            if ((window.location.pathname) != "/") {
                menu.fechar();
                corrida.fechar();
                pesquisa.fechar();
                btncorrida.fechar();
            }
        }, 10)
    }
}