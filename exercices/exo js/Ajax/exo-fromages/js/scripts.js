loadJSON();

function loadJSON() {

  var data_file = "./js/fromages.json";
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
        alert("Your browser broke!");
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
        var nouveauArticle = new Article(jsonObj[i].nom, jsonObj[i].classement, jsonObj[i].type, jsonObj[i].pays);
        nouveauArticle.creerArticle();
      }
    }
  }

  http_request.open("GET", data_file, true);
  http_request.send();
}

class Article {
  constructor(nom, note, type, pays) {
    this.nom = nom;
    this.note = note;
    this.type = type;
    this.pays = pays;
  }
  creerArticle() {
    var newArt = document.createElement('article');
    var nom = document.createElement('h3');
    var note = document.createElement('p');
    var para = document.createElement('p');
    var type = document.createElement('span');
    var pays = document.createElement('span');
    nom.className = 'nom';
    note.className = 'note';
    para.className = 'para';
    pays.className = 'pays';
    type.className = 'type';
    nom.innerText = this.nom;
    note.innerText = this.note;
    type.innerText = this.type + " / ";
    pays.innerText = this.pays;
    newArt.appendChild(nom);
    newArt.appendChild(note);
    para.appendChild(type);
    para.appendChild(pays);
    newArt.appendChild(para);
    document.querySelector('section').appendChild(newArt);
  }
}