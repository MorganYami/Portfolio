// function showing or masking buddys
function afficherMasquer(nb) {
    let select = document.getElementById(nb);
    if (select.style.maxHeight == "1100px") {
        select.style.maxHeight = "0px";
    }
    else {
        select.style.maxHeight = "1100px"
    }
}

//charging articles on page loading
loadHouses();

//fonction for charging the JSON
function loadHouses() {
    fetch('./js/got.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            class House {
                constructor(rang, nomH, logo) {
                    this.rang = rang;
                    this.nomH = nomH;
                    this.logo = logo;
                }
                createHouseArticle() {
                    var id= "l" + this.rang;
                    var content = document.createElement('article');
                    content.className = id;
                    content.innerHTML = `<div class="inline"><h2><img src="${this.logo}"> House ${this.nomH}</h2><button onclick="afficherMasquer('${id}')">+</button></div><div id="${id}" class="listBuddys"></div>`;
                    document.querySelector("section").appendChild(content);
                }
            }
            class Buddy extends House {
                constructor(rang, nomH, logo, nom, desc) {
                    super(rang, nomH, logo);
                    this.nom = nom;
                    this.desc = desc;
                }
                createBuddy() {
                    var newDiv = document.createElement('div');
                    newDiv.className = "buddy";
                    newDiv.innerHTML = 
                    `<h3>${this.nom}</h3>
                            <p>${this.desc} </p>`;
                    var selector = "#l" + this.rang;
                    document.querySelector(selector).appendChild(newDiv);
                }
            }
            dataLong = data.length;
            for (let i = 0; i < dataLong; i++) {
                var newHouse = new House(i, data[i].nomH, data[i].logo);
                newHouse.createHouseArticle();
                var gens = data[i].gens;
                for (let j of gens) {
                    var nouveauBuddy = new Buddy(i, data[i].nomH, data[i].logo, j.nom, j.description);
                    nouveauBuddy.createBuddy();
                }
            }
        });
}

