var database = firebase.database();
let nome, crm, email, senha;

function get_Profissional(){
  nome = document.getElementById("inputNome");
  crm = document.getElementById("inputCRM");
  email = document.getElementById("inputEmail");
  senha = document.getElementById("inputSenha");

  firebase.database().ref('/profissional').on('value', function(snapshot) {
    snapshot.forEach(function(item){        
        nome.value = item.val().nome;
    });
  });
}

function updateProfissional(){
  firebase.database().ref('profissional/' + crm.value + '/crm').update({
    nome: nome.value,
    crm: crm.value,
    email: email.value,
    senha: senha.value
  },function(error) {
    if (error) {
      console.log("error");
    } else {
      window.alert("Dados salvos");
    }
  });
}