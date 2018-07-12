
// Code pour la section selecteurJS

class Selection {
    constructor(n) {
        this.para = document.querySelector('#selecteurJS').querySelector('article').childNodes[n];
    }
    ajoutClasse(color) {
        this.para.querySelector('span').classList.add(color);
    }
}
var span1 = new Selection(3);
span1.ajoutClasse('red');
var span1 = new Selection(4);
span1.ajoutClasse('grey');



// Code pour la section selecteurJQ
$("#selecteurJQ span:first").addClass('grey');
$("#selecteurJQ span:last").addClass('red');
