const INICIO = {
    "slide": function() {
        var sli = new debliwuislideimg($, [
            '<img src="assets/Route.svg"> <h3>MOBILIDADE</h3><p>O mais completo táxi on demand</p>',
            '<img src="assets/Crossover.svg"> <h3>CARRO</h3><p>Segurança e conforto</p>',
            '<img src="assets/Motorcycle.svg"> <h3>MOTORIZADA</h3><p>Rapidez e agilidade sempre</p>'
        ],1,false,1200, 4000);
        setTimeout(function() {
            if (document.querySelector(".principal-corpo")) {
                if(document.querySelector("debliwui-slideimg")){

                }else{
                    var root = document.querySelector(".principal-corpo");
                    root.prepend(sli);
                }
                
            }

        }, 1);
    }
}