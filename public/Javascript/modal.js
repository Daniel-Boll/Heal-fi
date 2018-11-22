let medico = {
	nome: document.getElementById("inputNome"),
	crm: document.getElementById("inputCRM")
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
	idConsulta: document.getElementById("idConsulta")
}
function getMedico(){
	firebase.database().ref('/profissional').on('value', function(snapshot){
		snapshot.forEach(function(item){
        	// console.log(item.val().nome);
        	medico.nome.value = item.val().nome;
        	medico.crm.value = item.val().crm;
        });
	});
}

function consultar(){
	firebase.database().ref('paciente/' + '10372361900' + '/consulta/' + consulta.idConsulta.value).set({
		data: consulta.con_data.value,
		hora: consulta.hora.value,
		crm_medico: consulta.crm_medico.value,
		nome_medico: consulta.nome_medico.value,
		instituicao: consulta.instituicao.options[consulta.instituicao.selectedIndex].text,
		tipo_consulta: consulta.tipo_consulta.value,
		sintomas: consulta.sintomas.value,
		receita: consulta.receita.value,
		idConsulta: consulta.idConsulta.value
	}, function(error) {
		if (error) {
			console.log("error");
		} else {
			window.alert("Dados salvos");
		}
	});
}
