/**
 * This script is a just-for-fun-n-testin'-script by Dabihul (79738).
 * This script is released under the IDFC license.
 * Which means I Don't F*** Care what you do with it, as long as
 * you don't hold me responsible for any problem you might experience.
 */

/* Initialisation ------------------------------------------------------------*/
var
	alphabet = {},
	aInitialiser = {
		"alphabet_face":1,
		"choix_face":1,
		"choix_face":1,
		"choix_encre":1,
		"qualite_popo":1,
		"qualite_champi":1,
		"indicateur_EP":1,
		"alphabet_mob":1,
		"choix_mob":1,
		"qualite_mob":1,
		"bm_min":1,
		"bm_max":1,
		"bm_duree":1
	};
for(var id in aInitialiser) {
	this[id] = document.getElementById(id);
}

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
	link.onclick = maj_face;
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
	link.onclick = maj_fixant;
	alphabet_mob.appendChild(link);
	appendText(alphabet_mob," ");
}
for(var qualite in Qualites_Compos) {
	ajouteOption(qualite_mob,qualite);
}

/* DOM Handlers --------------------------------------------------------------*/
function maj_face() {
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
	maj_resultat();
}

function maj_fixant() {
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
	maj_resultat();
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
// Calcul de la durée suivant la méthode El Monkiess
	var
		duree_base = 7+2*Math.floor(Mobs[mob]/5),
		var_qualite = Math.min(4,(1+Math.floor(Mobs[mob]/5))/2);
	return duree_base+Math.floor(Qualites_Compos[qualite]*var_qualite);
}

function calcul_effet(face,encre,qualite) {
// Calcul de l'effet
// Pour l'instant, seules les stats impactées sont indiquées
	var effet = Faces[face].stat1+" +X";
	if(Faces[face].stat2) {
		effet += " | "+Faces[face].stat2+" +Y";
	}
	return effet;
}

function maj_resultat() {
	var qualite_encre;
	if(choix_encre.value==="Potion de Painture") {
		qualite_encre = qualite_popo.value;
	} else {
		qualite_encre = qualite_champi.value;
	}
	/*window.console.debug(
		choix_face.value,
		choix_encre.value,
		qualite_encre,
		choix_mob.value,
		qualite_mob.value
	);*/
	bm_min.innerHTML = calcul_effet(
		choix_face.value,
		choix_encre.value,
		qualite_encre.value
	);
	bm_duree.innerHTML = calcul_duree(
		choix_mob.value,
		qualite_mob.value
	);
}

choix_face.onchange = maj_resultat;
choix_encre.onchange = function() {
	bascule_type_encre();
	maj_resultat();
}
qualite_popo.onchange = maj_resultat;
qualite_champi.onchange = maj_resultat;
choix_mob.onchange = maj_resultat;
qualite_mob.onchange = maj_resultat;
