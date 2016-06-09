/**
 * This DB is a just-for-fun-n-testin'-DB by Dabihul (79738).
 * This DB is released under the IDFC license.
 * Which means I Don't F*** Care what you do with it, as long as
 * you don't hold me responsible for any problem you might experience.
 */

// Faces et types d'effets
var Faces = {
	// Face : {
	//	stat1: stat dominante
	//	stat2: stat auxiliaire ou undefined
	//	EP   : EP
	// }
	"Abishaii Blanc": {
		stat1: "MM",
		stat2: "REG",
		EP   : "Cèpe Lumineux"
	},
	"Abishaii Bleu": {
		stat1: "ARM",
		stat2: "REG",
		EP   : "Suinte Cadavre"
	},
	"Abishaii Jaune": {
		stat1: "VUE",
		stat2: "REG",
		EP   : "Girolle Sanglante"
	},
	"Abishaii Noir": {
		stat1: "RM",
		stat2: "REG",
		EP   : "Amanite Trolloïde"
	},
	"Abishaii Rose": {
		stat1: "ESQ",
		stat2: "REG",
		EP   : "Suinte Cadavre"
	},
	"Abishaii Rouge": {
		stat1: "ATT",
		stat2: "REG",
		EP   : "Pleurote Pleureuse"
	},
	"Abishaii Vert": {
		stat1: "DEG",
		stat2: "REG",
		EP   : "Nez Noir"
	},
	"Apocalypse": {
		stat1: "ARM",
		EP   : "Amanite Trolloïde"
	},
	"Araignée": {
		stat1: "VUE",
		stat2: "ARM",
		EP   : "Phytomassus Xilénique"
	},
	"Ashashin": {
		stat1: "DEG",
		stat2: "ESQ",
		EP   : "Horreur des Prés"
	},
	"Balrog": {
		stat1: "ATT",
		stat2: "DEG",
		EP   : "Nez Noir"
	},
	"Behemoth": {
		stat1: "ARM",
		stat2: "DEG",
		EP   : "Préscientus Reguis"
	},
	"Beholder": {
		stat1: "VUE",
		EP   : "DEG",
		stat2: "Fungus Rampant"
	},
	"Bouj'dla": {
		stat1: "REG",
		stat2: "RM",
		EP   : "Fungus Rampant"
	},
	"Caillouteux": {
		stat1: "ARM",
		stat2: "MM",
		EP   : "Préscientus Reguis"
	},
	"Capitan": {
		stat1: "VUE",
		stat2: "ESQ",
		EP   : "Phytomassus Xilénique"
	},
	"Carnosaure": {
		stat1: "DEG",
		stat2: "ATT",
		EP   : "Suinte Cadavre"
	},
	"Chauve-Souris": {
		stat1: "ATT",
		stat2: "ESQ",
		EP   : "Amanite Trolloïde"
	},
	"Chonchon": {
		stat1: "REG",
		stat2: "ARM",
		EP   : "Horreur Des Prés"
	},
	"Chulzy": {
		stat1: "RM",
		EP   : "?"
	},
	"Crasc": {
		stat1: "RM",
		stat2: "ARM",
		EP   : "Agaric Sous-Terrain"
	},
	"Croquemitaine": {
		stat1: "RM",
		stat2: "ESQ",
		EP   : "?"
	},
	"Daemonite": {
		stat1: "REG",
		stat2: "DEG",
		EP   : "Nez Noir"
	},
	"Diablotin": {
		stat1: "ESQ",
		stat2: "RM",
		EP   : "Horreur Des Prés"
	},
	"Djinn": {
		stat1: "ESQ",
		stat2: "ARM",
		EP   : "?"
	},
	"Dragon": {
		stat1: "ATT",
		stat2: "VUE",
		EP   : "Pied Jaune"
	},
	"Effrit": {
		stat1: "ESQ",
		stat2: "MM",
		EP   : "?"
	},
	"Feu": {
		stat1: "VUE",
		EP   : "Phytomassus Xilénique"
	},
	"Feu Follet": {
		stat1: "ESQ",
		stat2: "DEG",
		EP   : "?"
	},
	"Foudroyeur": {
		stat1: "DEG",
		stat2: "MM",
		EP   : "Horreur Des Prés"
	},
	"Froid": {
		stat1: "REG",
		EP   : "Pleurote Pleureuse"
	},
	"Fumeux": {
		stat1: "Vue",
		stat2: "RM",
		EP   : "Cèpe Lumineux"
	},
	"Geck'oo": {
		stat1: "RM",
		stat2: "VUE",
		EP   : "Fungus Rampant"
	},
	"Goblin": {
		stat1: "REG",
		stat2: "VUE",
		EP   : "Nez Noir"
	},
	"Gorgone": {
		stat1: "RM",
		stat2: "MM",
		EP   : "Nez Noir"
	},
	"Gremlins": {
		stat1: "ARM",
		stat2: "VUE",
		EP   : "Agaric Sous-Terrain"
	},
	"Gritche": {
		stat1: "ATT",
		stat2: "MM",
		EP   : "Girolle Sanglante"
	},
	"Hum": {
		stat1: "ATT",
		EP   : "Agaric Sous-Terrain"
	},
	"Hydre": {
		stat1: "DEG",
		stat2: "ARM",
		EP   : "Fungus Rampant"
	},
	"Lapin Blanc": {
		stat1: "DEG",
		stat2: "VUE",
		EP   : "Pied Jaunes"
	},
	"Les Yeux": {
		stat1: "Vue",
		stat2: "MM",
		EP   : "Girolle Sanglante"
	},
	"Liche": {
		stat1: "MM",
		stat2: "DEG",
		EP   : "Girolle Sanglante"
	},
	"Manger": {
		stat1: "DEG",
		EP   : "Suinte Cadavre"
	},
	"Mante Fulcreuse": {
		stat1: "REG",
		stat2: "ATT",
		EP   : "Bolet Péteur"
	},
	"Mégacéphale": {
		stat1: "MM",
		stat2: "ARM",
		EP   : "Cèpe Lumineux"
	},
	"Minotaure": {
		stat1: "ATT",
		stat2: "ARM",
		EP   : "Phytomassus Xilénique"
	},
	"Momie": {
		stat1: "REG",
		stat2: "MM",
		EP   : "Bolet Péteur"
	},
	"Mouch'oo": {
		stat1: "REG",
		stat2: "ESQ",
		EP   : "?"
	},
	"Mouche": {
		stat1: "ESQ",
		EP   : "Suinte Cadavre"
	},
	"Nécrochore": {
		stat1: "MM",
		stat2: "ATT",
		EP   : "?"
	},
	"Nécromant": {
		stat1: "MM",
		stat2: "ESQ",
		EP   : "Cèpe Lumineux"
	},
	"Phoenix": {
		stat1: "ESQ",
		EP   : "?"
	},
	"Rocketeux": {
		stat1: "ARM",
		stat2: "RM",
		EP   : "Pleurote Pleureuse"
	},
	"Sombre": {
		stat1: "MM",
		EP   : "Pleurote Pleureuse"
	},
	"Sorcière": {
		stat1: "RM",
		EP   : "?"
	},
	"Sphinx": {
		stat1: "MM",
		stat2: "VUE",
		EP   : "?"
	},
	"Succube": {
		stat1: "RM",
		stat2: "DEG",
		EP   : "?"
	},
	"Titan": {
		stat1: "DEG",
		stat2: "RM",
		EP   : "Agaric Sous-Terrain"
	},
	"Tubercule Tueur": {
		stat1: "ARM",
		stat2: "ESQ",
		EP   : "Horreur Des Prés"
	},
	"Tyran": {
		stat1: "ATT",
		stat2: "RM",
		EP   : "?"
	},
	"TyranOeil": {
		stat1: "VUE",
		stat2: "ATT",
		EP   : "Bolet Peteur"
	},
	"Vampire": {
		stat1: "MM",
		stat2: "RM",
		EP   : "Fungus Rampant"
	},
	"Vouivre": {
		stat1: "ESQ",
		stat2: "ATT",
		EP   : "?"
	}
};

// Toutes les Encres
var Encres = {
	"Potion de Painture":1,
	"Agaric Sous-Terrain":1,
	"Amanite Trolloïde":1,
	"Bolet Péteur":1,
	"Cèpe Lumineux":1,
	"Fungus Rampant":1,
	"Girolle Sanglante":1,
	"Horreur Des Prés":1,
	"Nez Noir":1,
	"Phytomassus Xilénique":1,
	"Pied Jaune":1,
	"Pleurote Pleureuse":1,
	"Préscientus Reguis":1,
	"Suinte Cadavre":1
}

// Qualités Champis
var Qualites_Champis = {
	"Acide":1,
	"Salé":1,
	"Sucré":1,
	"Mielleux":1
}

// Niveaux des Monstres
var Mobs = {
	"Abishaii Bleu"              :19,
	"Abishaii Noir"              :10,
	"Abishaii Rouge"             :23,
	"Abishaii Vert"              :15,
	"Ame-en-peine"               : 8,
	"Amibe Géante"               : 9,
	"Anaconda des Catacombes"    : 8,
	"Ankheg"                     :10,
	"Anoploure Purpurin"         :36,
	"Araignée Géante"            : 2,
	"Ashashin"                   :35,
	"Balrog"                     :50,
	"Banshee"                    :16,
	"Barghest"                   :36,
	"Basilisk"                   :11,
	"Behemoth"                   :34,
	"Behir"                      :14,
	"Beholder"                   :50,
	"Boggart"                    : 3,
	"Bondin"                     : 9,
	"Bouj'Dla Placide"           :37,
	"Bouj'Dla"                   :19,
	"Bulette"                    :19,
	"Caillouteux"                : 1,
	"Capitan"                    :35,
	"Carnosaure"                 :25,
	"Champi-Glouton"             : 3,
	"Chauve-Souris Géante"       : 4,
	"Cheval à Dents de Sabre"    :23,
	"Chevalier du Chaos"         :20,
	"Chimère"                    :13,
	"Chonchon"                   :24,
	"Coccicruelle"               :22,
	"Cockatrice"                 : 5,
	"Crasc"                      :10,
	"Crasc Medius"               :17,
	"Crasc Maexus"               :25,
	//"Crasc parasitus"            :??,
	"Croquemitaine"              : 6,
	"Cube Gélatineux"            :32,
	"Daemonite"                  :27,
	"Diablotin"                  : 5,
	"Dindon du Chaos"            : 1,
	"Djinn"                      :29,
	"Ectoplasme"                 :18,
	"Effrit"                     :27,
	"Elémentaire d'Air"          :23,
	"Elémentaire d'Eau"          :17,
	"Elémentaire de Feu"         :21,
	"Elémentaire de Terre"       :21,
	"Elémentaire du Chaos"       :26,
	"Erinyes"                    : 7,
	"Esprit-Follet"              :16,
	"Essaim Cratérien"           :30,
	"Essaim Sanguinaire"         :25,
	"Ettin"                      : 8,
	"Familier"                   : 1,
	"Fantôme"                    :24,
	"Feu Follet"                 :20,
	"Flagelleur Mental"          :33,
	"Foudroyeur"                 :38,
	"Fumeux"                     :22,
	"Fungus Géant"               : 9,
	"Fungus Violet"              : 4,
	"Furgolin"                   :10,
	"Gargouille"                 : 3,
	"Géant de Pierre"            :13,
	"Géant des Gouffres"         :22,
	"Geck'oo"                    :15,
	"Geck'oo Majestueux"         :40,
	"Glouton"                    :20,
	"Gnoll"                      : 5,
	"Gnu"                        : 1,
	"Gnu Domestique"             : 1,
	"Gnu Sauvage"                : 1,
	"Goblin"                     : 4,
	"Goblours"                   : 4,
	"Golem d'Argile"             :15,
	"Golem de cuir"              : 1,
	"Golem de Chair"             : 8,
	"Golem de Fer"               :31,
	"Golem de mithril"           : 1,
	"Golem de metal"             : 1,
	"Golem de papier"            : 1,
	"Golem de Pierre"            :23,
	"Gorgone"                    :11,
	"Goule"                      : 4,
	"Gowap"                      : 1,
	"Gowap Apprivoisé"           : 1,
	"Gowap Sauvage"              : 1,
	"Gremlins"                   : 3,
	"Gritche"                    :39,
	"Grouilleux"                 : 4,
	"Grylle"                     :31,
	"Harpie"                     : 4,
	"Hellrot"                    :18,
	"Homme-Lézard"               : 4,
	"Hurleur"                    : 8,
	"Hydre"                      :50,
	"Incube"                     :13,
	"Kobold"                     : 2,
	"Labeilleux"                 :26,
	"Lézard Géant"               : 5,
	"Liche"                      :50,
	"Limace Géante"              :10,
	"Loup-Garou"                 : 8,
	"Lutin"                      : 4,
	"Mante Fulcreuse"            :30,
	"Manticore"                  : 9,
	"Marilith"                   :33,
	"Méduse"                     : 6,
	"Mégacéphale"                :38,
	"Mille-Pattes Géant"         :14,
	"Mimique"                    : 6,
	"Minotaure"                  : 7,
	"Molosse Satanique"          : 8,
	"Momie"                      : 4,
	"Monstre Rouilleur"          : 3,
	"Mouch'oo"                   :14,
	"Mouch'oo Domestique"        :14,
	"Mouch'oo Sauvage"           :14,
	"Mouch'oo Majestueux Sauvage":33,
	"Nécrochore"                 :37,
	"Nécromant"                  :39,
	"Nécrophage"                 : 8,
	"Naga"                       :10,
	"Nuee de Vermine"            :13,
	"Nuage d'Insectes"           : 7,
	"Ogre"                       : 7,
	"Ombre de Roches"            :13,
	"Ombre"                      : 2,
	"Orque"                      : 3,
	"Ours-Garou"                 :18,
	"Palefroi Infernal"          :29,
	"Phoenix"                    :32,
	"Plante Carnivore"           : 4,
	"Pseudo-Dragon"              : 5,
	"Rat Géant"                  : 2,
	"Rat-Garou"                  : 3,
	"Rocketeux"                  : 5,
	"Sagouin"                    : 3,
	"Scarabee Géant"             : 4,
	"Scorpion Géant"             :10,
	"Shai"                       :28,
	"Sirène"                     : 8,
	"Slaad"                      : 5,
	"Sorcière"                   :17,
	"Spectre"                    :14,
	"Sphinx"                     :30,
	"Squelette"                  : 1,
	"Strige"                     : 2,
	"Succube"                    :13,
	"Tertre Errant"              :20,
	"Thri-kreen"                 :10,
	"Tigre-Garou"                :12,
	"Titan"                      :26,
	"Trancheur"                  :35,
	"Tubercule Tueur"            :14,
	"Tutoki"                     : 4,
	"Vampire"                    :29,
	"Ver Carnivore Géant"        :12,
	"Veskan Du Chaos"            :14,
	"Vouivre"                    :33,
	"Worg"                       : 5,
	"Xorn"                       :14,
	"Yéti"                       : 8,
	"Yuan-ti"                    :15,
	"Zombie"                     : 2
}

// Qualités Compos
var Qualites_Compos = {
	"Très Mauvaise":-2,
	"Mauvaise":-1,
	"Moyenne":0,
	"Bonne":1,
	"Très Bonne":2
}
