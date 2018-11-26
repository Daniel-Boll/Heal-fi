function nextHTML(){
	location.href = "solicitacao.html"
}
function toRegister(){
	location.href = "registrar.html"
}

function sign_in(){
	firebase.database().ref('/profissional').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			let crm = document.getElementById('inputCPFCRM').value;
			let senha = document.getElementById('inputPassword').value;
			console.log(item.val());
			if(crm == item.val().crm && senha == item.val().senha){
				location.href = "../Profissional/home.html?CRM="+item.val().crm;
			}
		});
	});

	firebase.database().ref('/paciente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			let cpf = document.getElementById('inputCPFCRM').value;
			let senha = document.getElementById('inputPassword').value;
			console.log(item.val());
			if(cpf == item.val().ficha_normal.cpf && senha == item.val().ficha_normal.senha){
				location.href = "../paciente/home_paciente.html?CPF="+item.val().ficha_normal.cpf;
			}
		});
	});
	
}
