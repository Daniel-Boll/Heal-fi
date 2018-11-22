var database = firebase.database();
let altura, peso, ts;
let dc = {
  hipertensao_arterial:document.getElementById("hipertensao_arterial"),
  dores_na_coluna:document.getElementById("dores_na_coluna"),
  colesterol_alto:document.getElementById("colesterol_alto"),
  depressao:document.getElementById("depressao"),
  diabetes:document.getElementById("diabetes"),
  artrite:document.getElementById("artrite"),
  cancer:document.getElementById("cancer"),
  bronquite:document.getElementById("bronquite"),
  DVC:document.getElementById("DVC"),
  DRC:document.getElementById("DRC"),
  dort:document.getElementById("dort"),
  avc:document.getElementById("avc"),
  cirrose:document.getElementById("cirrose")
}

let alergia = {
  alergia_a_medicamentos:{
    checkbox: document.getElementById("alergia_medicamento"),
    input: document.getElementById("alergia_medicamento_input")
  },
  alergia_alimentar:{
    checkbox: document.getElementById("alergia_alimentar"),
    input: document.getElementById("alergia_alimentar_input")
  },
  alergia_latex: document.getElementById("alergia_ao_latex"),
  asma_alergica: document.getElementById("asma_alergica"),
  rinite_alergica: document.getElementById("rinite_alergica"),
  alergia_a_animais:{
    checkbox: document.getElementById("alergia_a_animais"),
    input: document.getElementById("alergia_a_animais_input")
  },
  alergia_a_mofo: document.getElementById("alergia_a_mofo")
}

function get_paciente(){
  altura = document.getElementById('paciente_altura');
  peso = document.getElementById('paciente_peso');
  ts = document.getElementById('paciente_ts');
  firebase.database().ref('/paciente').on('value', function(snapshot) {
    snapshot.forEach(function(item){
      // Dados normais
      altura.value = item.val().ficha_tecnica.altura;
      peso.value = item.val().ficha_tecnica.peso;
      ts.value = item.val().ficha_tecnica.ts;

      // Doenças crônicas
      dc.hipertensao_arterial.checked = (item.val().ficha_tecnica.doencas_cronicas.hipertensao_arterial == "Sim") ? true : false;
      dc.dores_na_coluna.checked = (item.val().ficha_tecnica.doencas_cronicas.dores_na_coluna == "Sim") ? true : false;
      dc.colesterol_alto.checked = (item.val().ficha_tecnica.doencas_cronicas.colesterol_alto == "Sim") ? true : false;
      dc.depressao.checked = (item.val().ficha_tecnica.doencas_cronicas.depressao == "Sim") ? true : false;
      dc.diabetes.checked = (item.val().ficha_tecnica.doencas_cronicas.diabetes == "Sim") ? true : false;
      dc.artrite.checked = (item.val().ficha_tecnica.doencas_cronicas.artrite == "Sim") ? true : false;
      dc.cancer.checked = (item.val().ficha_tecnica.doencas_cronicas.cancer == "Sim") ? true : false;
      dc.bronquite.checked = (item.val().ficha_tecnica.doencas_cronicas.bronquite == "Sim") ? true : false;
      dc.DVC.checked = (item.val().ficha_tecnica.doencas_cronicas.DVC == "Sim") ? true : false;
      dc.DRC.checked = (item.val().ficha_tecnica.doencas_cronicas.DRC == "Sim") ? true : false;
      dc.dort.checked = (item.val().ficha_tecnica.doencas_cronicas.dort == "Sim") ? true : false;
      dc.avc.checked = (item.val().ficha_tecnica.doencas_cronicas.avc == "Sim") ? true : false;
      dc.cirrose.checked = (item.val().ficha_tecnica.doencas_cronicas.cirrose == "Sim") ? true : false;
    
      // Alergias
      
      // alergia a medicamentos (alergia_a_medicamentos)
      alergia.alergia_a_medicamentos.checkbox.checked = (item.val().ficha_tecnica.alergia.alergia_a_medicamentos.tem == "Sim") ? true : false;
      alergia.alergia_a_medicamentos.input.value = (item.val().ficha_tecnica.alergia.alergia_a_medicamentos.tem == "Sim") ? item.val().ficha_tecnica.alergia.alergia_a_medicamentos.qual : "";
      (item.val().ficha_tecnica.alergia.alergia_a_medicamentos.tem == "Sim") ? able_input(alergia.alergia_a_medicamentos.checkbox) : null;

      // alergia alimentar (alergia_alimentar)
      alergia.alergia_alimentar.checkbox.checked = (item.val().ficha_tecnica.alergia.alergia_alimentar.tem == "Sim") ? true : false;
      alergia.alergia_alimentar.input.value = (item.val().ficha_tecnica.alergia.alergia_alimentar.tem == "Sim") ? item.val().ficha_tecnica.alergia.alergia_alimentar.qual : "";
      (item.val().ficha_tecnica.alergia.alergia_alimentar.tem == "Sim") ? able_input(alergia.alergia_alimentar.checkbox) : null;

      // alergia a animais (alergia_a_animais)
      alergia.alergia_a_animais.checkbox.checked = (item.val().ficha_tecnica.alergia.alergia_a_animais.tem == "Sim") ? true : false;
      alergia.alergia_a_animais.input.value = (item.val().ficha_tecnica.alergia.alergia_a_animais.tem == "Sim") ? item.val().ficha_tecnica.alergia.alergia_a_animais.qual : "";
      (item.val().ficha_tecnica.alergia.alergia_a_animais.tem == "Sim") ? able_input(alergia.alergia_a_animais.checkbox) : null;

      // alergia a latex (alergia_latex)
      alergia.alergia_latex.checked = (item.val().ficha_tecnica.alergia.alergia_latex == "Sim") ? true : false;

      // asma alergica (asma_alergica)
      alergia.asma_alergica.checked = (item.val().ficha_tecnica.alergia.asma_alergica == "Sim") ? true : false;

      // Rinite alergica (rinite_alergica)
      alergia.rinite_alergica.checked = (item.val().ficha_tecnica.alergia.rinite_alergica == "Sim") ? true : false;

      // alergia a mofo (alergia_a_mofo)
      alergia.alergia_a_mofo.checked = (item.val().ficha_tecnica.alergia.alergia_a_mofo == "Sim") ? true : false;
    });
  });
}

function updatePaciente(){

  firebase.database().ref('paciente/' + '10372361900' + '/ficha_tecnica').update({
    altura: altura.value,
    peso: peso.value,
    ts: ts.value,
  });

  firebase.database().ref('paciente/' + '10372361900' + '/ficha_tecnica/doencas_cronicas').update({
    hipertensao_arterial: (dc.hipertensao_arterial.checked) ? "Sim" : "Não",
    dores_na_coluna: (dc.dores_na_coluna.checked) ? "Sim" : "Não",
    colesterol_alto: (dc.colesterol_alto.checked) ? "Sim" : "Não",
    depressao: (dc.depressao.checked) ? "Sim" : "Não",
    diabetes: (dc.diabetes.checked) ? "Sim" : "Não",
    artrite: (dc.artrite.checked) ? "Sim" : "Não",
    cancer: (dc.cancer.checked) ? "Sim" : "Não",
    bronquite: (dc.bronquite.checked) ? "Sim" : "Não",
    DVC: (dc.DVC.checked) ? "Sim" : "Não",
    DRC: (dc.DRC.checked) ? "Sim" : "Não",
    dort: (dc.dort.checked) ? "Sim" : "Não",
    avc: (dc.avc.checked) ? "Sim" : "Não",
    cirrose: (dc.cirrose.checked) ? "Sim" : "Não"
  });

  firebase.database().ref('paciente/' + '10372361900' + '/ficha_tecnica/alergia').update({
    alergia_a_animais: {
      tem: (alergia.alergia_a_animais.checkbox.checked) ? "Sim" : "Não",
      qual: alergia.alergia_a_animais.input.value
    },
    alergia_a_medicamentos: {
      tem: (alergia.alergia_a_medicamentos.checkbox.checked) ? "Sim" : "Não",
      qual: alergia.alergia_a_medicamentos.input.value
    },
    alergia_alimentar: {
      tem: (alergia.alergia_alimentar.checkbox.checked) ? "Sim" : "Não",
      qual: alergia.alergia_alimentar.input.value
    },
    alergia_a_mofo: (alergia.alergia_a_mofo.checked) ? "Sim" : "Não",
    alergia_latex: (alergia.alergia_latex.checked) ? "Sim" : "Não",
    asma_alergica: (alergia.asma_alergica.checked) ? "Sim" : "Não",
    rinite_alergica: (alergia.rinite_alergica.checked) ? "Sim" : "Não",
    alergia_a_mofo: (alergia.alergia_a_mofo.checked) ? "Sim" : "Não" 
  });

  alert("Salvo");
}


function able_input(something){
  document.getElementById(something.id+"_input").disabled = !document.getElementById(something.id+"_input").disabled;
}