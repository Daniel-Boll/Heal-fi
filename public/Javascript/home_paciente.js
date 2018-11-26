var database = firebase.database();
let nome, data_nascimento, sexo_doc, cpf, rg, mae, pai, nacionalidade, mp_nasc, situacao_fm, raca_cor, grau, endereco, numero, bairro, ocupacao, uf;
let url_object = queryObj();
function get_paciente(){
  nome = document.getElementById("paciente_nome");
  data_nascimento = document.getElementById("paciente_data_nascimento");
  sexo_doc = document.getElementById("paciente_sexo");
  cpf = document.getElementById("paciente_cpf");
  rg = document.getElementById("paciente_rg");
  mae = document.getElementById("paciente_mae");
  pai = document.getElementById("paciente_pai");
  nacionalidade = document.getElementById("paciente_nacionalidade");
  mp_nasc = document.getElementById("paciente_mp_nasc");
  situacao_fm = document.getElementById("paciente_situacao_fm");
  raca_cor = document.getElementById("paciente_raca_cor");
  grau = document.getElementById("paciente_grau");
  endereco = document.getElementById("paciente_endereco");
  numero = document.getElementById("paciente_numero");
  bairro = document.getElementById("paciente_bairro");
  uf = document.getElementById("paciente_uf");
  ocupacao = document.getElementById("paciente_ocupacao");

  firebase.database().ref('/paciente').on('value', function(snapshot) {
    snapshot.forEach(function(item){
      if (url_object.CPF == item.val().ficha_normal.cpf){
        nome.value = item.val().ficha_normal.nome;
        data_nascimento.value = item.val().ficha_normal.data_nascimento;
        sexo_doc.selectedIndex = (item.val().ficha_normal.sexo == "Masculino") ? 2 : 1;
        cpf.value = item.val().ficha_normal.cpf;
        rg.value = item.val().ficha_normal.rg;
        mae.value = item.val().ficha_normal.mae;
        pai.value = item.val().ficha_normal.pai;
        nacionalidade.value = item.val().ficha_normal.nacionalidade;
        mp_nasc.value = item.val().ficha_normal.mp_nasc;
        situacao_fm.value = item.val().ficha_normal.situacao_fm;
        raca_cor.value = item.val().ficha_normal.raca_cor;
        grau.value = item.val().ficha_normal.grau;
        endereco.value = item.val().ficha_normal.endereco;
        numero.value = item.val().ficha_normal.numero;
        bairro.value = item.val().ficha_normal.bairro;
        uf.value = item.val().ficha_normal.uf;
        ocupacao.value = item.val().ficha_normal.ocupacao;
      }
    });
  });
}

function updatePaciente(){
  firebase.database().ref('paciente/' + cpf.value + '/ficha_normal').update({
    nome: nome.value,
    data_nascimento: data_nascimento.value,
    sexo: sexo_doc.options[sexo_doc.selectedIndex].text,
    cpf: cpf.value,
    rg: rg.value,
    mae: mae.value,
    pai: pai.value,
    nacionalidade: nacionalidade.value,
    mp_nasc: mp_nasc.value,
    situacao_fm: situacao_fm.value,
    raca_cor: raca_cor.value,
    grau: grau.value,
    endereco: endereco.value,
    numero: numero.value,
    bairro: bairro.value,
    uf: uf.value,
    ocupacao: ocupacao.value
  },function(error) {
    if (error) {
      console.log("error");
    } else {
      window.alert("Dados salvos");
    }
  }); 
}

function queryObj() {
  var result = {}, keyValuePairs = location.search.slice(1).split("&");
  keyValuePairs.forEach(function(keyValuePair) {
    keyValuePair = keyValuePair.split('=');
    result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
  });
  return result;
}
