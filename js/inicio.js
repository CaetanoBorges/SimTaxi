const INICIO = {
    "slide": function() {
        var sli = new debliwuislideimg($, [
            '<img src="assets/Route.svg">',
            '<img src="assets/Crossover.svg">',
            '<img src="assets/Motorcycle.svg">'
        ]);
        setTimeout(function() {
            if (document.querySelector(".inicio-slide")) {
                var root = document.querySelector(".inicio-slide");
                root.append(sli);
            }

        }, 1000);
    }
}