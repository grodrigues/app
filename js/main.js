/* $(function(){
	alert("Está página contém Spoiler. Deseja continuar?");
});*/
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('home')
})

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('profile')
})

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

// JavaScript Document
var SMS = {

	//id no local storage
	_lsId:'smsData7',

	//funcão que será executada ao iniciar o app
	init: function() {
		this.setRepositorio();
		this.list();

		$("#sms-form").on("submit", function(event){
			event.preventDefault();
			SMS.save(function() {
				event.target.reset();
			});

		});
	},

	//sempre irá retornar um array
	getRepositorio: function() {
		//retorna um array: ou um array de objetos ou um array vazio, mas sempre retorna
		return JSON.parse(localStorage.getItem(this._lsId)) || [];
	},

	//sempre grava um array
	setRepositorio: function(msgs) {


		//define como dados dos repositório, as mensagens ou um array vazio
		var data = msgs ? msgs : this.getRepositorio();

		//grava os dados no Local Storage
		localStorage.setItem(this._lsId, JSON.stringify(data));
	},

	//grava uma mensagem
	save: function(callback) {

				function pushMsgs(geoposition) {
					var msg, msgs;

					//declara as variáveis do método

							//cria o objeto de mensagem
							msg = {
								nome: $("#nome").val(),
								txt: $("#txt").val(),
								time: (new Date()).getTime(),
								lat: 0,
								lng: 0
							}

							//acessa o repositório de mensagens (array dos objetos) na chave do LS this._lsId
							msgs = SMS.getRepositorio();

					//adiciona a mensagem no repositório
							msgs.push(msg);

					if(geoposition && geoposition.coords) {
						msg.lat = geoposition.coords.latitude;
						msg.lng = geoposition.coords.longitude;
					}

					//exibe a mensagem na tela
					SMS.displayMsg(1,msg);

					//atualiza o repositório
					SMS.setRepositorio(msgs);

					callback();
				}
				navigator.geolocation.getCurrentPosition(pushMsgs);
	},

	//lista as mensagens na tela
	list: function() {
		var msgs = this.getRepositorio();
		$(msgs).each(this.displayMsg);
	},

	//adiciona uma mensagem na tela
	displayMsg: function(index,msg){
			var tds;

					tds = $("<tr>").append("<td><td><td><td><td>").find("td");
					tds.eq(0).text(msg.nome);
					tds.eq(1).text(msg.txt);
					tds.eq(2).text(msg.time);
					tds.eq(3).text(msg.lat);
					tds.eq(4).text(msg.lng);

		$("#msgs-table tbody").prepend(tds.end());
	},

};
SMS.init();
