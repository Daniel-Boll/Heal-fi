let table = document.getElementById("datatables")

// Pegar o cpf

var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
let cpf_passed = unescape(temp[1]);

$('#exampleModalCenter_doencas').on('shown.bs.modal', function(){
	firebase.database().ref('/paciente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
			let item_cpf = String(item.val().cpf);
			if(cpf_passed == item_cpf){
				let tr = document.createElement("tr");
				console.log(item.val().doencas_cron["Alergia"]);			
				let td = document.createElement("td");
				let doenca;
				td.id = "td";
                
                for(let tipo in item.val().doencas_cron){
                	item.val().doencas_cron["Alergia"].forEach( function(element, index) {
                		console.log("Element: "+element+"\nIndex: "+index);
                	});
                }


				// for(let i=0; i<item.val().doencas.length; i++){
				// 	td = document.createElement("td");
				// 	doenca = document.createTextNode(item.val().doencas[i]);
				// 	td.appendChild(doenca);
				// 	tr.appendChild(td);
				// 	table.appendChild(tr);
				// }
			}
		});
	});
	return
});