
loadContenu();

function loadContenu() {

    var data_file = "./js/content-chap.json";
    var http_request = new XMLHttpRequest();

    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer Browsers (for noobs!)
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {

            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                // Something went wrong
                alert("Your browser sucks!");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function () {

        if (http_request.readyState == 4) {
            var jsonObj = [];
            jsonObj = JSON.parse(http_request.responseText);
            longJson = jsonObj.length;
            for (i = 0; i < longJson; i++) {
                var chapitre = new Chapitre(jsonObj[i].titre, jsonObj[i].paragraphe);
                chapitre.afficher();
            }
        }
    }

    http_request.open("GET", data_file, true);
    http_request.send();
}

class Chapitre {
    constructor(titre, paragraphe) {
        this.titre = titre;
        this.paragraphe = paragraphe;
    }
    afficher() {
        var maDiv = document.createElement("div");
        var monTitre = document.createElement("h1");
        var monParagraphe = document.createElement("p");
        monTitre.innerText = this.titre;
        monParagraphe.innerText = this.paragraphe;
        maDiv.appendChild(monTitre);
        maDiv.appendChild(monParagraphe);
        document.body.appendChild(maDiv);
    }
}
