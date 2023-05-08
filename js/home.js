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
    }
}