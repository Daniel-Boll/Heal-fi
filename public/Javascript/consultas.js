var database = firebase.database();
let table = document.getElementById("consultatable");

getPaciente = function(list){
	firebase.database().ref('/paciente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			console.log(item.val().consulta['0001']);
			let tr = document.createElement("tr");
			tr.id = "tr"

			tr.onclick = function(){
                $('#exampleModalCenter_consulta').modal();
								document.getElementById("inputSintoma_modal").value = item.val().consulta['0001'].sintomas;
			}

			// codigo
			let td_codigo = document.createElement("td");
			td_codigo.id = "td_codigo";
			let codigo = document.createTextNode(item.val().consulta['0001'].idConsulta);
			td_codigo.appendChild(codigo);
			tr.appendChild(td_codigo);
			table.appendChild(tr);

            let td_crm_medico = document.createElement("td");
			td_crm_medico.id = "td_crm_medico";
			let crm_medico = document.createTextNode(item.val().consulta['0001'].crm_medico);
			td_crm_medico.appendChild(crm_medico);
			tr.appendChild(td_crm_medico);
			table.appendChild(tr);

			let td_data = document.createElement("td");
			td_data.id = "td_data";
			let data = document.createTextNode(item.val().consulta['0001'].data);
			td_data.appendChild(data);
			tr.appendChild(td_data);
			table.appendChild(tr);

			let td_hora = document.createElement("td");
			td_hora.id = "td_hora";
			let hora = document.createTextNode(item.val().consulta['0001'].hora);
			td_hora.appendChild(hora);
			tr.appendChild(td_hora);
			table.appendChild(tr);

			let td_instituicao = document.createElement("td");
			td_instituicao.id = "td_instituicao";
			let instituicao = document.createTextNode(item.val().consulta['0001'].instituicao);
			td_instituicao.appendChild(instituicao);
			tr.appendChild(td_instituicao);
			table.appendChild(tr);

			let td_nome_medico = document.createElement("td");
			td_nome_medico.id = "td_nome_medico";
			let nome_medico = document.createTextNode(item.val().consulta['0001'].nome_medico);
			td_nome_medico.appendChild(nome_medico);
			tr.appendChild(td_nome_medico);
			table.appendChild(tr);

			// let td_receita = document.createElement("td");
			// td_receita.id = "td_receita";
			// let receita = document.createTextNode(item.val().consulta['0001'].receita);
			// td_receita.appendChild(receita);
			// tr.appendChild(td_receita);
			// table.appendChild(tr);

			// let td_sintomas = document.createElement("td");
			// td_sintomas.id = "td_sintomas";
			// let sintomas = document.createTextNode(item.val().consulta['0001'].sintomas);
			// td_sintomas.appendChild(sintomas);
			// tr.appendChild(td_sintomas);
			// table.appendChild(tr);

			let td_tipo_consulta = document.createElement("td");
			td_tipo_consulta.id = "td_tipo_consulta";
			let tipo_consulta = document.createTextNode(item.val().consulta['0001'].tipo_consulta);
			td_tipo_consulta.appendChild(tipo_consulta);
			tr.appendChild(td_tipo_consulta);
			table.appendChild(tr);
		});
	});
	return
}
