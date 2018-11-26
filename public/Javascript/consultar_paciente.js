let crm_url = queryObj();
let datalist = document.getElementById('pacientesDatalist');
let inputList = document.getElementById('pacientes');
let idProdutos=[]
let table = document.getElementById("datatables");
let cpf_to_pass = {};

firebase.database().ref('/paciente').on('value', function(snapshot) {
	datalist.innerHTML = '';
	snapshot.forEach(function(item){
		var option = document.createElement('option');
		option.setAttribute('nome', item.val().ficha_normal.nome);
		option.setAttribute('cpf', item.val().ficha_normal.cpf);
		option.appendChild(document.createTextNode(item.val().ficha_normal.cpf));
		console.log(option);
		console.log(datalist)
		datalist.appendChild(option);
	});
});

getPaciente = function(list){
	let options = document.querySelectorAll('#' + inputList.getAttribute('list') + ' option');
	console.log(list.value);

	firebase.database().ref('/paciente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			console.log(item.val().ficha_normal);
			if(list.value == item.val().ficha_normal.cpf){
				let tr = document.createElement("tr");

				// Nome
				let td_nome = document.createElement("td");
				td_nome.id = "td_nome";
				let nome = document.createTextNode(item.val().ficha_normal.nome);
				td_nome.appendChild(nome);
				tr.appendChild(td_nome);
				table.appendChild(tr);

				// RG
				let td_rg = document.createElement("td");
				td_rg.id = "td_rg";
				let rg = document.createTextNode(item.val().ficha_normal.rg);
				td_rg.appendChild(rg);
				tr.appendChild(td_rg);
				table.appendChild(tr);

				// CPF
				let td_cpf = document.createElement("td");
				td_cpf.id = "td_cpf"
				let cpf = document.createTextNode(item.val().ficha_normal.cpf);
				td_cpf.appendChild(cpf);
				tr.appendChild(td_cpf);
				table.appendChild(tr);

				cpf_to_pass.x = item.val().ficha_normal.cpf;

			}
		});
	});
	return
}

function consultar(){
	location.href = "home_paciente.html?CRM="+crm_url.CRM+"&CPF="+cpf_to_pass.x;  
}

function queryObj() {
  var result = {}, keyValuePairs = location.search.slice(1).split("&");
  keyValuePairs.forEach(function(keyValuePair) {
    keyValuePair = keyValuePair.split('=');
    result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
  });
  return result;
}