const CORRIDA = {
    "pendente": function() {
        var sli = new debliwuipendente($, [
            '<img src="assets/fotocarro.png">',
            '<img src="assets/fotocarro.png">',
            '<img src="assets/fotocarro.png">'
        ]);
        setTimeout(function() {
            var root = document.querySelector(".corrida-pendente");
            root.append(sli);
        }, 1000);
    }
}