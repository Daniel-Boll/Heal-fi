let getLast, getLastExame, getLastNota;
let modal_url = queryObj();
function queryObj() {
	var result = {}, keyValuePairs = location.search.slice(1).split("&");
	keyValuePairs.forEach(function(keyValuePair) {
		keyValuePair = keyValuePair.split('=');
		result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
	});
	return result;
}
let medico = {
	nome: document.getElementById("inputNome"),
	crm: document.getElementById("inputCRM"),
	idConsulta: document.getElementById("idConsulta")
};

let consulta = {
	con_data: document.getElementById("data"),
	hora: document.getElementById("hora"),
	crm_medico: document.getElementById("inputCRM"),
	nome_medico: document.getElementById("inputNome"),
	instituicao: document.getElementById("inputInstituicao"),
	tipo_consulta: document.getElementById("inputTipoConsulta"),
	sintomas: document.getElementById("inputSintoma"),
	receita: document.getElementById("inputReceita"),
	idConsulta: document.getElementById("idConsulta"),
	remedio: document.getElementById("inputRemedio"),
	quantidade: document.getElementById("inputQuantidade"),
	tempo: document.getElementById("inputTempo"),
	durante: document.getElementById("inputDurante")
}

let exame_ = {
	idExame: document.getElementById("idExame"),
	tipo: document.getElementById("inputTipoExame"),
	diagnostico: document.getElementById("inputDiagnostico"),
	nome_medico: document.getElementById("inputNomeExame"),
	crm_medico: document.getElementById("inputCRMExame"),
	instituicao: document.getElementById("inputInstituicaoExame")
}

let nota = {
	idNota: document.getElementById("idNota"),
	nome_medico: document.getElementById("inputNomeNota"),
	crm_medico: document.getElementById("inputCRMNota"),
	instituicao: document.getElementById("inputInstituicaoNota"),
	ocorrencia: document.getElementById("inputOcorrencia"),
	justificativa: document.getElementById("inputJustificativa")
}

function getExame(){
    firebase.database().ref('/paciente').on('value', function(snapshot){
		snapshot.forEach(function(item){
			for(item in item.val().exame){
				console.log(item);
				getLastExame = item;
			}
		});
	});

	firebase.database().ref('/profissional').on('value', function(snapshot){
		snapshot.forEach(function(item){

			if(item.val().crm == modal_url.CRM){
				exame_.idExame.value = lpad((parseInt(getLastExame)+1), 4);
				exame_.nome_medico.value = item.val().nome;
				exame_.crm_medico.value = item.val().crm;
			}
		});
	});
}

function getNota(){
    firebase.database().ref('/paciente').on('value', function(snapshot){
		snapshot.forEach(function(item){
			for(item in item.val().nota){
				getLastNota = item;
			}
		});
	});

	firebase.database().ref('/profissional').on('value', function(snapshot){
		snapshot.forEach(function(item){

			if(item.val().crm == modal_url.CRM){
				nota.idNota.value = lpad((parseInt(getLastNota)+1), 4);
				nota.nome_medico.value = item.val().nome;
				nota.crm_medico.value = item.val().crm;
			}
		});
	});
}

function getMedico(){
	firebase.database().ref('/paciente').on('value', function(snapshot){
		snapshot.forEach(function(item){
			for(item in item.val().consulta){
				console.log(item);
				getLast = item;
			}
		});
	});

	firebase.database().ref('/profissional').on('value', function(snapshot){
		snapshot.forEach(function(item){

			if(item.val().crm == modal_url.CRM){
				medico.nome.value = item.val().nome;
				medico.crm.value = item.val().crm;
				medico.idConsulta.value = lpad((parseInt(getLast)+1), 4);
			}
		});
	});
}

function lpad(value, padding) {
	var zeroes = new Array(padding+1).join("0");
	return (zeroes + value).slice(-padding);
}

function consultar(){
	firebase.database().ref('paciente/' + modal_url.CPF + '/consulta/' + consulta.idConsulta.value).set({
		data: consulta.con_data.value,
		hora: consulta.hora.value,
		crm_medico: consulta.crm_medico.value,
		nome_medico: consulta.nome_medico.value,
		instituicao: consulta.instituicao.options[consulta.instituicao.selectedIndex].text,
		tipo_consulta: consulta.tipo_consulta.value,
		sintomas: consulta.sintomas.value,
		receita: getReceita(),
		idConsulta: consulta.idConsulta.value
	}, function(error) {
		if (error) {
			console.log("error");
		} else {
			window.alert("Dados salvos");
		}
	});
}

function _exame_(){
    firebase.database().ref('paciente/' + modal_url.CPF + '/exame/' + exame_.idExame.value).set({
		data: consulta.con_data.value,
		hora: consulta.hora.value,
		crm_medico: exame_.crm_medico.value,
		nome_medico: exame_.nome_medico.value,
		instituicao: exame_.instituicao.options[exame_.instituicao.selectedIndex].text,
		tipo_exame: exame_.tipo.value,
		diagnostico: exame_.diagnostico.value,
		idExame: exame_.idExame.value
	}, function(error) {
		if (error) {
			console.log("error");
		} else {
			window.alert("Dados salvos");
		}
	});
}

function _nota_(){
	firebase.database().ref('paciente/' + modal_url.CPF + '/nota/' + nota.idNota.value).set({
		data: consulta.con_data.value,
		hora: consulta.hora.value,
		crm_medico: nota.crm_medico.value,
		nome_medico: nota.nome_medico.value,
		instituicao: nota.instituicao.options[nota.instituicao.selectedIndex].text,
		ocorrencia: nota.ocorrencia.value,
		justificativa: nota.justificativa.value,
		idNota: nota.idNota.value
	});
}

function getReceita(){
	if(consulta.receita.value == ""){
		return "Remédio: "+consulta.remedio.options[consulta.remedio.selectedIndex].text+"\nQuantidade: "+consulta.quantidade.options[consulta.quantidade.selectedIndex].text+"\nTempo: "+consulta.tempo.options[consulta.tempo.selectedIndex].text+"\nDurante: "+consulta.durante.options[consulta.durante.selectedIndex].text;
	}else{
		return consulta.receita.value;
	}
}