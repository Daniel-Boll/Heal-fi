var database = firebase.database();
let profissional = {
  nome: document.getElementById("inputNome"),
  crm: document.getElementById("inputCRM"),
  email: document.getElementById("inputEmail"),
  senha: document.getElementById("inputSenha"),
  sexo: document.getElementById("inputSexo"),
  cpf: document.getElementById("inputCPF"),
  dn: document.getElementById("inputData")
}

function get_Profissional(){
  firebase.database().ref('/profissional').on('value', function(snapshot) {
    snapshot.forEach(function(item){        
        profissional.nome.value = item.val().nome;
        profissional.crm.value = item.val().crm;
        profissional.email.value = item.val().email;
        profissional.senha.value = item.val().senha;
        profissional.sexo.selectedIndex = (item.val().sexo == "Masculino") ? 2 : 1;
        profissional.cpf.value = item.val().cpf;
        profissional.dn.value = item.val().data_nascimento;
    });
  });
}

function update(){
  firebase.database().ref('profissional/' + profissional.crm.value).update({
    nome: profissional.nome.value,
    crm: profissional.crm.value,
    email: profissional.email.value,
    senha: profissional.senha.value,
    cpf: profissional.cpf.value,
    sexo: profissional.sexo.options[profissional.sexo.selectedIndex].text,
    data_nascimento: profissional.dn.value
  },function(error) {
    if (error) {
      console.log("error");
    } else {
      window.alert("Dados salvos");
    }
  });
}