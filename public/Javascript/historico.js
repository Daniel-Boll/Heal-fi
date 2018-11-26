let table = document.getElementById("historicotable");
let historico_url = queryObj();

function queryObj() {
	var result = {}, keyValuePairs = location.search.slice(1).split("&");
	keyValuePairs.forEach(function(keyValuePair) {
		keyValuePair = keyValuePair.split('=');
		result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
	});
	return result;
}


getHistorico = function(list){
	firebase.database().ref('/paciente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			if(item.val().ficha_normal.cpf == historico_url.CPF){
                // Consulta
                for(let itens in item.val().consulta){
					console.log(item.val().consulta[itens]);
					let tr = document.createElement("tr");
					tr.className = "table table-striped table-bordered table-hover"
					tr.style.cursor = "pointer";

					tr.onclick = function(){
						$('#exampleModalCenter_consulta').modal();
						document.getElementById("inputSintoma_modal").value = item.val().consulta[itens].sintomas;
					}

			        // codigo
			        let td_codigo = document.createElement("td");
			        td_codigo.id = "td_codigo";
			        let codigo = document.createTextNode(item.val().consulta[itens].idConsulta);
			        td_codigo.appendChild(codigo);
			        tr.appendChild(td_codigo);
			        table.appendChild(tr);
			        
			        let td_data = document.createElement("td");
			        td_data.id = "td_data";
			        let data = document.createTextNode(item.val().consulta[itens].data);
			        td_data.appendChild(data);
			        tr.appendChild(td_data);
			        table.appendChild(tr);

			        let td_hora = document.createElement("td");
			        td_hora.id = "td_hora";
			        let hora = document.createTextNode(item.val().consulta[itens].hora);
			        td_hora.appendChild(hora);
			        tr.appendChild(td_hora);
			        table.appendChild(tr);

			        let td_nome_medico = document.createElement("td");
			        td_nome_medico.id = "td_nome_medico";
			        let nome_medico = document.createTextNode(item.val().consulta[itens].nome_medico);
			        td_nome_medico.appendChild(nome_medico);
			        tr.appendChild(td_nome_medico);
			        table.appendChild(tr);
			        
			        let td_crm_medico = document.createElement("td");
			        td_crm_medico.id = "td_crm_medico";
			        let crm_medico = document.createTextNode(item.val().consulta[itens].crm_medico);
			        td_crm_medico.appendChild(crm_medico);
			        tr.appendChild(td_crm_medico);
			        table.appendChild(tr);

			        let td_tipo_consulta = document.createElement("td");
			        td_tipo_consulta.id = "td_tipo_consulta";
			        let tipo_consulta = document.createTextNode("Consulta: "+item.val().consulta[itens].tipo_consulta);
			        td_tipo_consulta.appendChild(tipo_consulta);
			        tr.appendChild(td_tipo_consulta);
			        table.appendChild(tr);

			        let td_instituicao = document.createElement("td");
			        td_instituicao.id = "td_instituicao";
			        let instituicao = document.createTextNode(item.val().consulta[itens].instituicao);
			        td_instituicao.appendChild(instituicao);
			        tr.appendChild(td_instituicao);
			        table.appendChild(tr);


			    }

				// Exame
				for(index in item.val().exame){
					let tr = document.createElement("tr");
					tr.className = "table table-striped table-bordered table-hover"
					tr.style.cursor = "pointer";
                    tr.onclick = function(){
						$('#exampleModalCenter_exame').modal();
						document.getElementById("inputExame_modal").value = item.val().exame[index].diagnostico;
					}
    
					let td_codigo = document.createElement("td");
					td_codigo.id = "td_codigo";

					let codigo = document.createTextNode(item.val().exame[index].idExame);
					td_codigo.appendChild(codigo);
					tr.appendChild(td_codigo);
					table.appendChild(tr);

					let td_data = document.createElement("td");
					td_data.id = "td_data";
					let data = document.createTextNode(item.val().exame[index].data);
					td_data.appendChild(data);
					tr.appendChild(td_data);
					table.appendChild(tr);

					let td_hora = document.createElement("td");
					td_hora.id = "td_hora";
					let hora = document.createTextNode(item.val().exame[index].hora);
					td_hora.appendChild(hora);
					tr.appendChild(td_hora);
					table.appendChild(tr);

					let td_nome_medico = document.createElement("td");
					td_nome_medico.id = "td_nome_medico";
					let nome_medico = document.createTextNode(item.val().exame[index].nome_medico);
					td_nome_medico.appendChild(nome_medico);
					tr.appendChild(td_nome_medico);
					table.appendChild(tr);

					let td_crm_medico = document.createElement("td");
					td_crm_medico.id = "td_crm_medico";
					let crm_medico = document.createTextNode(item.val().exame[index].crm_medico);
					td_crm_medico.appendChild(crm_medico);
					tr.appendChild(td_crm_medico);
					table.appendChild(tr);

					let td_tipo_exame = document.createElement("td");
					td_tipo_exame.id = "td_tipo_exame";
					let tipo_exame = document.createTextNode("Exame: "+item.val().exame[index].tipo_exame);
					td_tipo_exame.appendChild(tipo_exame);
					tr.appendChild(td_tipo_exame);
					table.appendChild(tr);

					// let td_diagnostico = document.createElement("td");
					// td_diagnostico.id = "td_diagnostico";
					// let diagnostico = document.createTextNode(item.val().exame[index].diagnostico);
					// td_diagnostico.appendChild(diagnostico);
					// tr.appendChild(td_diagnostico);
					// table.appendChild(tr);

					let td_instituicao = document.createElement("td");
					td_instituicao.id = "td_instituicao";
					let instituicao = document.createTextNode(item.val().exame[index].instituicao);
					td_instituicao.appendChild(instituicao);
					tr.appendChild(td_instituicao);
					table.appendChild(tr);
				}

				// Nota

				for(index in item.val().nota){
					let tr = document.createElement("tr");
					tr.className = "table table-striped table-bordered table-hover"
					tr.style.cursor = "pointer";
                    tr.onclick = function(){
						$('#exampleModalCenter_nota').modal();
						document.getElementById("inputNota_modal").value = item.val().nota[index].justificativa;
					}
    
					let td_codigo = document.createElement("td");
					td_codigo.id = "td_codigo";
					let codigo = document.createTextNode(item.val().nota[index].idNota);
					td_codigo.appendChild(codigo);
					tr.appendChild(td_codigo);
					table.appendChild(tr);

					let td_data = document.createElement("td");
					td_data.id = "td_data";
					let data = document.createTextNode(item.val().nota[index].data);
					td_data.appendChild(data);
					tr.appendChild(td_data);
					table.appendChild(tr);

					let td_hora = document.createElement("td");
					td_hora.id = "td_hora";
					let hora = document.createTextNode(item.val().nota[index].hora);
					td_hora.appendChild(hora);
					tr.appendChild(td_hora);
					table.appendChild(tr);

					let td_nome_medico = document.createElement("td");
					td_nome_medico.id = "td_nome_medico";
					let nome_medico = document.createTextNode(item.val().nota[index].nome_medico);
					td_nome_medico.appendChild(nome_medico);
					tr.appendChild(td_nome_medico);
					table.appendChild(tr);

					let td_crm_medico = document.createElement("td");
					td_crm_medico.id = "td_crm_medico";
					let crm_medico = document.createTextNode(item.val().nota[index].crm_medico);
					td_crm_medico.appendChild(crm_medico);
					tr.appendChild(td_crm_medico);
					table.appendChild(tr);

					let td_tipo_exame = document.createElement("td");
					td_tipo_exame.id = "td_tipo_exame";
					let tipo_exame = document.createTextNode("Nota: "+item.val().nota[index].ocorrencia);
					td_tipo_exame.appendChild(tipo_exame);
					tr.appendChild(td_tipo_exame);
					table.appendChild(tr);

					let td_instituicao = document.createElement("td");
					td_instituicao.id = "td_instituicao";
					let instituicao = document.createTextNode(item.val().exame[index].instituicao);
					td_instituicao.appendChild(instituicao);
					tr.appendChild(td_instituicao);
					table.appendChild(tr);
				}
			}
		});
	});
	return
}