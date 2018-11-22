var database = firebase.database();
let table = document.getElementById("exametable");

getPaciente = function(list){
	firebase.database().ref('/paciente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			console.log(item.val().exame);
			let tr = document.createElement("tr");
            
            // {
            // 	código,
            // 	consulta,
            // 	instituição,
            // 	data,
            // 	hora
            // }

			// codigo
			let td_codigo = document.createElement("td");
			td_codigo.id = "td_codigo";
			let codigo = document.createTextNode(item.val().exame.codigo);
			td_codigo.appendChild(codigo);
			tr.appendChild(td_codigo);
			table.appendChild(tr);

			let td_consulta = document.createElement("td");
			td_consulta.id = "td_consulta";
			let consulta = document.createTextNode(item.val().exame.consulta);
			td_consulta.appendChild(consulta);
			tr.appendChild(td_consulta);
			table.appendChild(tr);

			let td_instituicao = document.createElement("td");
			td_instituicao.id = "td_instituicao";
			let instituicao = document.createTextNode(item.val().exame.instituicao);
			td_instituicao.appendChild(instituicao);
			tr.appendChild(td_instituicao);
			table.appendChild(tr);

			let td_data = document.createElement("td");
			td_data.id = "td_data";
			let data = document.createTextNode(item.val().exame.data);
			td_data.appendChild(data);
			tr.appendChild(td_data);
			table.appendChild(tr);

			let td_hora = document.createElement("td");
			td_hora.id = "td_hora";
			let hora = document.createTextNode(item.val().exame.hora);
			td_hora.appendChild(hora);
			tr.appendChild(td_hora);
			table.appendChild(tr);
		});
	});
	return
}