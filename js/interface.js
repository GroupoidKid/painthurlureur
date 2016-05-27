/**
 * This script is a just-for-fun-n-testin'-script by Dabihul (79738).
 * This script is released under the IDFC license.
 * Which means I Don't F*** Care what you do with it, as long as
 * you don't hold me responsible for any problem you might experience.
 */

/* Initialisation ------------------------------------------------------------*/
var
	alphabet = {},
	alphabet_face = document.getElementById("alphabet_face"),
	choix_face = document.getElementById("choix_face"),
	choix_encre = document.getElementById("choix_encre"),
	qualite_popo = document.getElementById("qualite_popo"),
	qualite_champi = document.getElementById("qualite_champi"),
	indicateur_EP = document.getElementById("indicateur_EP"),
	alphabet_mob = document.getElementById("alphabet_mob"),
	choix_mob = document.getElementById("choix_mob"),
	qualite_mob = document.getElementById("qualite_mob");

// Initialisation Faces
alphabet = {};
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
	appendText(alphabet_face," ");
}

// Initialisation Encres
for(var encre in Encres) {
	ajouteOption(choix_encre,encre);
}
for(var i=1 ; i<6 ; ++i) {
	ajouteOption(qualite_popo,"niv "+i,i);
}
for(var qualite in Qualites_Champis) {
	ajouteOption(qualite_champi,qualite);
}
choix_encre.onchange = bascule_type_encre;

// Initialisation Agent fixant
alphabet = {};
for(var mob in Mobs) {
	ajouteOption(choix_mob,mob);
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
	alphabet_mob.appendChild(link);
	appendText(alphabet_mob," ");
}
for(var qualite in Qualites_Compos) {
	ajouteOption(qualite_mob,qualite);
}

/* DOM Handlers --------------------------------------------------------------*/
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
	for(var i=choix_mob.childNodes.length-1 ; i>=0 ; --i) {
		var option = choix_mob.childNodes[i];
		if(lettre=="Reset" || lettre==option.value[0]) {
			option.style.display="";
			start = option.value;
		} else {
			option.style.display="none";
		}
	}
	choix_mob.value = start;
}

function bascule_type_encre() {
	if(choix_encre.value==="Potion de Painture") {
		qualite_popo.style.display = "";
		qualite_champi.style.display = "none";
	} else {
		qualite_popo.style.display = "none";
		qualite_champi.style.display = "";
	}
}

/* Calculs ------------------------------------------------------------------*/
function calcul_duree(mob,qualite) {
// Calcul de la durée suivant la méthode de Monk
	
}

