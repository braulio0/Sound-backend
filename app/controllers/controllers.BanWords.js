const normaliza = (message) =>
	message
		.toLowerCase()
		.normalize("NFD")
		.replace(/[.!,*?^@#\u0300-\u036f]/g, "");

const ban = (message) => {
	let banWord = 0;
	let banWordsUser = {};
	let dict = {};
	let banWords = {
		puta: 0,
		putita: 0,
		golfa: 0,
		gorda: 0,
		perra: 0,
		culera: 0,
		culero: 0,
	};

	let withoutspace = message.split(" ");
	for (let word of withoutspace) {
		if (normaliza(word) in banWords) {
			banWords[normaliza(word)]++;
			banWord++;
		}
	}
	for (let word in banWords) {
		if (banWords[word] > 0) {
			banWordsUser[word] = banWords[word];
		}
	}
	if (banWord > 0) {
		return true;
	} else {
		return false;
	}
	//!banword ? console.log("todo chido") : console.log(banWordsUser);
};

exports.banWords = ban;
