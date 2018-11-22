console.log('testes');

function registrar(){
	let nome = document.getElementById("inputNome").value;
	let email = document.getElementById("inputEmail").value;
	let senha = document.getElementById("inputSenha").value;
	let crm = document.getElementById("inputCRM").value;
    let cpf = document.getElementById("inputCPF").value;
    let dn = document.getElementById("inputData").value;
    let sexo_doc = document.getElementById("inputSexo");
    let sexo = sexo_doc.options[sexo_doc.selectedIndex].text;

	firebase.database().ref('profissional/' + crm).set({
        nome: nome,
        email: email,
        senha: senha,
        crm: crm,
        cpf: cpf,
        data_nascimento: dn,
        sexo: sexo
	}, function(error) {
		if (error) {
			console.log("error");
		} else {
			window.alert("Dados salvos");
		}
	});
}
