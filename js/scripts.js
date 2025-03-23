const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const content = document.querySelector("#card-entretelas");

first.style.backgroundColor="#FF7714";
first.style.opacity="100%";

first.onclick = function select () {
	content.innerHTML="As entretelas designam um artigo que é normalmente utilizado entre duas camadas de tecido e adequam-se às aplicações mais variadas e específicas de inúmeras indústrias, nomeadamente do têxtil e vestuário. Apesar de na maior parte dos casos passarem despercebidas ao consumidor final, as entretelas desempenham importantes funções ao garantir suporte, formato, corpo, reforço, estabilização e performance da peça onde é aplicada, oferecendo-lhe qualidade e aparência melhorada. Servem ainda para reduzir a propensão para um tecido esfiapar ao cortar ou casear.";
	first.style.backgroundColor="#FF7714";
	first.style.opacity="100%";

	/* removendo classes */
	second.style.backgroundColor="#455763";
	second.style.opacity="20%";
	third.style.backgroundColor="#455763";
	third.style.opacity="20%";
	fourth.style.backgroundColor="#455763";
	fourth.style.opacity="20%";
}

second.onclick = function select () {
	content.innerHTML='A Socorte trabalha com uma gama ampla de entretelas de diversas gramagens e composições. Existem entretelas não tecidas ou entretelas tecidas, com cola ou sem cola, com cola de pasta ou com cola microponto, com filamentos ou sem filamentos. Umas são só cola (originando as conhecidas fitas de colar baínhas, "texiron" ou "vieselines"), outras são volumosas, enquanto que outras servem de suporte para bordados.';
	second.style.backgroundColor="#FF7714";
	second.style.opacity="100%";

	/* removendo classes */
	first.style.backgroundColor="#455763";
	first.style.opacity="20%";
	third.style.backgroundColor="#455763";
	third.style.opacity="20%";
	fourth.style.backgroundColor="#455763";
	fourth.style.opacity="20%";
}

third.onclick = function select () {
	content.innerHTML="As entretelas podem ser utilizadas em peça, ou convertidas quer em fitas singelas a direito ou a viés, quer em fitas técnicas mais específicas tais como bandas perfuradas, fitas com costura invisível, ligueta com costura ou com fitilho, entretelas termocoladas, entre outras.";
	third.style.backgroundColor="#FF7714";
	third.style.opacity="100%";

	/* removendo classes */

	first.style.backgroundColor="#455763";
	first.style.opacity="20%";
	second.style.backgroundColor="#455763";
	second.style.opacity="20%";
	fourth.style.backgroundColor="#455763";
	fourth.style.opacity="20%";
}


fourth.onclick = function select () {
	content.innerHTML="Para além dos produtos anteriormente designados, a Socorte oferece experiência e tradição a incorporar estes artigos em outras fitas técnicas compostas tais como em fitas cós, fitas para chapéus, reforço de fitas, entre outros produtos técnicos específicos muitas vezes desenvolvidos à medida. Algumas entretelas encontram-se disponíveis, em quantidades de retalho, na nossa Loja Online M2.";
	fourth.style.backgroundColor="#FF7714";
	fourth.style.opacity="100%";

	/* removendo classes */

	first.style.backgroundColor="#455763";
	first.style.opacity="20%";
	second.style.backgroundColor="#455763";
	second.style.opacity="20%";
	third.style.backgroundColor="#455763";
	third.style.opacity="20%";
}





