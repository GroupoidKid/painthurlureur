/**
 * This script is a just-for-fun-n-testin'-script by Dabihul (79738).
 * This script is released under the IDFC license.
 * Which means I Don't F*** Care what you do with it, as long as
 * you don't hold me responsible for any problem you might experience.
 */

/* Cross-browser mouse Scroll handling ---------------------------------------*/

var scrollEvent =
	(/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";


/* DOM-related functions -----------------------------------------------------*/
// In alphabetical order

function ajouteOption(select,str,value) {
// Ajoute une option de nom=str et value=value(=str) au select
	if(value===void(0)) {
		value = str;
	}
	var option = document.createElement('option');
	option.value = value;
	appendText(option,str);
	select.appendChild(option);
	return option;
}

function appendText(node,str) {
// Ajoute le texte str à la fin de node
	node.appendChild(document.createTextNode(str));
}

