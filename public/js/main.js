$(document).ready(function(){
	console.log('Main Running');

	console.log(Handlebars.templates);
	Handlebars.templates['intro']({
		title: 'Bem vindo à página da OC Videos®',
		text:  'O meu nome é Óscar Chaves, estudei Som e Imagem na Universidade Católica Portuguesa, vivo no Porto e adoro idealizar e criar os meus próprios vídeos. Alguns dos meus trabalhos foram realizados em eventos de empresas como Prio, Sonae, Câmara Municipal de Gaia, Sodecia e Team Building. Procuro acima de tudo captar a essência de cada momento para que as pessoas se possam rever no resultado final.'
	});
});
