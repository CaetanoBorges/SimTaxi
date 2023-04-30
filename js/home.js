const HOME = {
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