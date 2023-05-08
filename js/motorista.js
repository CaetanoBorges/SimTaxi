const MOTORISTA = {
    "thumbsStatus": function() {
        return localStorage.getItem("thumbsStatus");
    },
    "setThumbsStatus": function(value) {
        localStorage.setItem("thumbsStatus", value);
    }, // null | 0 | 1
    "reagirButtons": function(MOTORISTA) {
        var thumbsDown = document.querySelector(".thumbs-down");
        var thumbsUp = document.querySelector(".thumbs-up");
        if (MOTORISTA.thumbsStatus() == null || MOTORISTA.thumbsStatus() == "null") {

        }
        if (MOTORISTA.thumbsStatus() == "0") {
            thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
        }
        if (MOTORISTA.thumbsStatus() == "1") {
            thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
        }
        thumbsDown.addEventListener("click", function() {
            var status = MOTORISTA.thumbsStatus();

            if (status == null || status == "null") {
                MOTORISTA.setThumbsStatus("0");
                thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
                return;
            }
            if (status == "1") {
                MOTORISTA.setThumbsStatus("0");
                thumbsUp.setAttribute("src", "assets/thumbs-up-regular.svg");
                thumbsDown.setAttribute("src", "assets/thumbs-down-solid.svg");
                return;
            }
        });
        thumbsUp.addEventListener("click", function() {
            var status = MOTORISTA.thumbsStatus();

            if (status == null || status == "null") {
                MOTORISTA.setThumbsStatus("1");
                thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
                return;
            }
            if (status == "0") {
                MOTORISTA.setThumbsStatus("1");
                thumbsDown.setAttribute("src", "assets/thumbs-down-regular.svg");
                thumbsUp.setAttribute("src", "assets/thumbs-up-solid.svg");
                return;
            }
        });
    },
    "carroSlide": function() {
        var sli = new debliwuislideimg($, [
            '<img src="assets/fotocarro.png">',
            '<img src="assets/fotocarro.png">',
            '<img src="assets/fotocarro.png">'
        ]);
        setTimeout(function() {
            var root = document.querySelector(".imagens");
            root.append(sli);
        }, 1000);
    }
}