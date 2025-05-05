const descriptions = {
            1979: "Empresa fundada no dia 9 de Maio por Manuel Teixeira Miranda, e começa a laborar na Zona Indústrial do Porto, na Rua Eng. Ezequiel Campos. Tudo começou com uma máquina de corte, com a qual se iniciou o crescimento gradual e sustentado do negócio.",
            1987: "Com a expansão do negócio tornou-se insuficiente o espaço, e proporcionou-se a aquisição de armazém em Leça da Palmeira (Rua Veloso Salgado), passando a laborar nos dois locais em simultâneo.",
            1988: "Ocorre o processo de informatização da empresa, que desde então desenvolveu os seus sistemas à medida dos requisitos do negócio, colocando-se desde então na vanguarda na gestão dos seus processos com integração informática.",
            1991: "A qualidade reconhecida do trabalho desenvolvido a nível nacional leva à conquista de clientes e parcerias internacionais. O mercado internacional começa a crescer e a representar cada vez mais uma parte importante do trabalho e da faturação.",
            1995: "A necessidade de unificação das pessoas e dos processos levou à aquisição de novo armazém na Zona Industrial do Porto, na Rua Delfim Ferreira, consolidando aqui toda a atividade da empresa que estava fragmentada. Este local é hoje onde se situa a sede e o centro produtivo da empresa.",
            2006: "É criado o primeiro website institucional para a Socorte que vem dar presença institucional da empresa na web. Pode ser consultado aqui",
            2013: "Ocorre a aquisição e incorporação da empresa concorrente Texreps Portuguesa - Produtos Têxteis, Lda, detida até então por um grupo sueco. Com esta compra, a Socorte aumenta a sua oferta de produtos e serviços, e assume-se cada vez mais como um fornecedor global de fitas e de acessórios têxteis.",
            2015: "A Texreps Portuguesa altera o seu nome para Metro ao Quadrado e implementa uma nova imagem para reforço do seu posicionamento como fornecedor de referência de produtos têxteis nos mercados nacional e internacional. Foi ainda criada a marca Metro ao Quadrado, projeto que mais tarde irá dar origem a loja online de venda ao consumidor (https://loja.socorte.pt/).",
            2016: "É realizado o lançamento de novo website."
        };
        
        function selectYear(year) {
            document.getElementById("year-title").textContent = year;
            document.getElementById("year-description").textContent = descriptions[year];
            
            document.querySelectorAll(".year").forEach(el => el.classList.remove("active"));
            document.querySelector(`.year[data-year='${year}']`).classList.add("active");
        }


const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const content = document.querySelector("#card-entretelas");

first.style.backgroundColor="#FF7714";
first.style.opacity="100%";

first.onclick = function select () {
	content.innerHTML="As entretelas designam um artigo que é normalmente utilizado entre duas camadas de tecido e adequam-se às aplicações mais variadas e específicas de inúmeras indústrias, nomeadamente do têxtil e vestuário.";
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
	content.innerHTML='A Socorte trabalha com uma gama ampla de entretelas de diversas gramagens e composições. Existem entretelas não tecidas ou entretelas tecidas, com cola ou sem cola, com cola de pasta ou com cola microponto, com filamentos ou sem filamentos.';
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
	content.innerHTML="Para além dos produtos anteriormente designados, a Socorte oferece experiência e tradição a incorporar estes artigos em outras fitas técnicas compostas tais como em fitas cós, fitas para chapéus, reforço de fitas, entre outros produtos técnicos específicos muitas vezes desenvolvidos à medida.";
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





