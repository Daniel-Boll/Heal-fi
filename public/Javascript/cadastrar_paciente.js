var database = firebase.database();
let cpf;
let nome;
let idade;
let userId;
function cadastrar_paciente() {

  nome = document.getElementById("paciente_nome").value;
  data_nascimento = document.getElementById("paciente_data_nascimento").value;
  sexo_doc = document.getElementById("paciente_sexo");
  sexo = sexo_doc.options[sexo_doc.selectedIndex].text;
  cpf = document.getElementById("paciente_cpf").value;
  rg = document.getElementById("paciente_rg").value;
  senha = document.getElementById("paciente_senha").value
  mae = document.getElementById("paciente_mae").value;
  pai = document.getElementById("paciente_pai").value;
  nacionalidade = document.getElementById("paciente_nacionalidade").value;
  mp_nasc = document.getElementById("paciente_mp_nasc").value;
  situacao_fm = document.getElementById("paciente_situacao_fm").value;
  raca_cor = document.getElementById("paciente_raca_cor").value;
  grau = document.getElementById("paciente_grau").value;
  endereco = document.getElementById("paciente_endereco").value;
  numero = document.getElementById("paciente_numero").value;
  bairro = document.getElementById("paciente_bairro").value;
  uf = document.getElementById("paciente_uf").value;
  ocupacao = document.getElementById("paciente_ocupacao").value;

  firebase.database().ref('paciente/' + cpf + '/ficha_normal').set({
    nome: nome,
    data_nascimento: data_nascimento,
    sexo: sexo,
    cpf: cpf,
    rg: rg,
    senha: senha,
    mae: mae,
    pai: pai,
    nacionalidade: nacionalidade,
    mp_nasc: mp_nasc,
    situacao_fm: situacao_fm,
    raca_cor: raca_cor,
    grau: grau,
    endereco: endereco,
    numero: numero,
    bairro: bairro,
    uf: uf,
    ocupacao: ocupacao
  }, function(error) {
    if (error) {
      console.log("error");
    } else {
      window.alert("Dados salvos");
    }
  });
}
