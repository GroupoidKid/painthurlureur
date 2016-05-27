/**
 * This script is a just-for-fun-n-testin'-script by Dabihul (79738).
 * This script is released under the IDFC license.
 * Which means I Don't F*** Care what you do with it, as long as
 * you don't hold me responsible for any problem you might experience.
 */

/* Initialisation ------------------------------------------------------------*/
var
	alphabet_face = document.getElementById("alphabet_face"),
	choix_face = document.getElementById("choix_face"),
	choix_encre = document.getElementById("choix_encre"),
	indicateur_EP = document.getElementById("indicateur_EP"),
	alphabet_fixant = document.getElementById("alphabet_fixant"),
	choix_fixant = document.getElementById("choix_fixant");

var alphabet = {};
for(var face in Faces) {
	ajouteOption(choix_face,face);
	alphabet[face[0]]=1;
}
alphabet["Reset"]=1;
for(var lettre in alphabet) {
	var
		link = document.createElement("a"),
		text = document.createTextNode("["+lettre+"]");
	link.appendChild(text);
	link.lettre = lettre;
	link.style.cursor = "pointer";
	link.onclick = update_face;
	alphabet_face.appendChild(link);
}

for(var encre in Popos) {
	ajouteOption(choix_encre,encre);
}
for(var encre in Champis) {
	ajouteOption(choix_encre,encre);
}

var alphabet = {};
for(var mob in Mobs) {
	ajouteOption(choix_fixant,mob);
	alphabet[mob[0]]=1;
}
alphabet["Reset"]=1;
for(var lettre in alphabet) {
	var
		link = document.createElement("a"),
		text = document.createTextNode("["+lettre+"]");
	link.appendChild(text);
	link.lettre = lettre;
	link.style.cursor = "pointer";
	link.onclick = update_fixant;
	alphabet_fixant.appendChild(link);
}


/* Handlers ------------------------------------------------------------------*/
function update_face() {
	var	
		lettre = this.lettre,
		start = "Abishaii Blanc";
	for(var i=choix_face.childNodes.length-1 ; i>=0 ; --i) {
		var option = choix_face.childNodes[i];
		if(lettre=="Reset" || lettre==option.value[0]) {
			option.style.display="";
			start = option.value;
		} else {
			option.style.display="none";
		}
	}
	choix_face.value = start;
}

function update_fixant() {
	var	
		lettre = this.lettre,
		start = "Abishaii Bleu";
	for(var i=choix_fixant.childNodes.length-1 ; i>=0 ; --i) {
		var option = choix_fixant.childNodes[i];
		if(lettre=="Reset" || lettre==option.value[0]) {
			option.style.display="";
			start = option.value;
		} else {
			option.style.display="none";
		}
	}
	choix_fixant.value = start;
}

