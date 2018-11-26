var database = firebase.database();
let url_obj = queryObj();
let altura, peso, ts;
let dc = {
  hipertensao_arterial:document.getElementById("hipertensao_arterial"),
  dores_na_coluna:document.getElementById("dores_na_coluna"),
  colesterol_alto:document.getElementById("colesterol_alto"),
  depressao:document.getElementById("depressao"),
  diabetes:document.getElementById("diabetes"),
  artrite:document.getElementById("artrite"),
  bronquite:document.getElementById("bronquite"),
  DVC:document.getElementById("DVC"),
  DRC:document.getElementById("DRC"),
  dort:document.getElementById("dort"),
  avc:document.getElementById("avc"),
  cirrose:document.getElementById("cirrose"),
  cancer:{
    checkbox:document.getElementById("cancer"),
    input:document.getElementById("cancer_input")
  }
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

let DST = {
  dst_hpv: document.getElementById("dst_hpv")
}

let dst = {
  dst_hpv: document.getElementById("dst_hpv"),
  dst_cancro_mole: document.getElementById("dst_cancro_mole"),
  dst_aids: document.getElementById("dst_aids"),
  dst_htvl: document.getElementById("dst_htvl"),
  dst_mycoplasma: document.getElementById("dst_mycoplasma"),
  dst_gonorreia: document.getElementById("dst_gonorreia"),
  dst_clamidia: document.getElementById("dst_clamidia"),
  dst_pelvica: document.getElementById("dst_pelvica"),
  dst_sifilis: document.getElementById("dst_sifilis"),
  dst_ebola: document.getElementById("dst_ebola"),
  dst_herpes: document.getElementById("dst_herpes"),
  dst_donovanose: document.getElementById("dst_donovanose"),
  dst_hepatites: document.getElementById("dst_hepatites"),
  dst_linfogranuloma: document.getElementById("dst_linfogranuloma"),
  dst_tricomoniase: document.getElementById("dst_tricomoniase"),
  dst_sida: document.getElementById("dst_sida"),
  dst_hepatiteB: document.getElementById("dst_hepatiteB"),
  dst_outros: {
    checkbox: document.getElementById("dst_outros"),
    input: document.getElementById("dst_outros_input")
  }
}

function get_paciente(){
  altura = document.getElementById('paciente_altura');
  peso = document.getElementById('paciente_peso');
  ts = document.getElementById('paciente_ts');
  firebase.database().ref('/paciente').on('value', function(snapshot) {
    snapshot.forEach(function(item){
      if(url_obj.CPF == item.val().ficha_normal.cpf){
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
        dc.bronquite.checked = (item.val().ficha_tecnica.doencas_cronicas.bronquite == "Sim") ? true : false;
        dc.DVC.checked = (item.val().ficha_tecnica.doencas_cronicas.DVC == "Sim") ? true : false;
        dc.DRC.checked = (item.val().ficha_tecnica.doencas_cronicas.DRC == "Sim") ? true : false;
        dc.dort.checked = (item.val().ficha_tecnica.doencas_cronicas.dort == "Sim") ? true : false;
        dc.avc.checked = (item.val().ficha_tecnica.doencas_cronicas.avc == "Sim") ? true : false;
        dc.cirrose.checked = (item.val().ficha_tecnica.doencas_cronicas.cirrose == "Sim") ? true : false;

        //cancer (cancer)
        dc.cancer.checkbox.checked = (item.val().ficha_tecnica.doencas_cronicas.cancer.tem == "Sim") ? true : false;
        dc.cancer.input.value = (item.val().ficha_tecnica.doencas_cronicas.cancer.tem == "Sim") ? item.val().ficha_tecnica.doencas_cronicas.cancer.qual : "";
        (item.val().ficha_tecnica.doencas_cronicas.cancer.tem == "Sim") ? able_input(dc.cancer.checkbox) : null;

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

        //DST OU IST
        DST.dst_hpv.checked = (item.val().ficha_tecnica.dst.dst_hpv == "Sim") ? true : false;
        dst.dst_cancro_mole.checked =( item.val().ficha_tecnica.dst.dst_cancro_mole == "Sim") ? true : false;
        dst.dst_aids.checked =( item.val().ficha_tecnica.dst.dst_aids == "Sim") ? true : false;
        dst.dst_htvl.checked =( item.val().ficha_tecnica.dst.dst_htvl == "Sim") ? true : false;
        dst.dst_hpv.Mycoplasma =( item.val().ficha_tecnica.dst.dst_mycoplasma == "Sim") ? true : false;
        dst.dst_gonorreia.checked =( item.val().ficha_tecnica.dst.dst_gonorreia == "Sim") ? true : false;
        dst.dst_clamidia.checked =( item.val().ficha_tecnica.dst.dst_clamidia == "Sim") ? true : false;
        dst.dst_pelvica.checked =( item.val().ficha_tecnica.dst.dst_pelvica == "Sim") ? true : false;
        dst.dst_sifilis.checked =( item.val().ficha_tecnica.dst.dst_sifilis == "Sim") ? true : false;
        dst.dst_ebola.checked =( item.val().ficha_tecnica.dst.dst_ebola == "Sim") ? true : false;
        dst.dst_herpes.checked =( item.val().ficha_tecnica.dst.dst_herpes == "Sim") ? true : false;
        dst.dst_donovanose.checked =( item.val().ficha_tecnica.dst.dst_donovanose == "Sim") ? true : false;
        dst.dst_hepatites.checked =( item.val().ficha_tecnica.dst.dst_linfogranuloma == "Sim") ? true : false;
        dst.dst_tricomoniase.checked =( item.val().ficha_tecnica.dst.dst_tricomoniase == "Sim") ? true : false;
        dst.dst_sida.checked =( item.val().ficha_tecnica.dst.dst_sida == "Sim") ? true : false;
        dst.dst_hepatiteB.checked =( item.val().ficha_tecnica.dst.hepatiteB == "Sim") ? true : false; 
        //dst outros (dst_outros)
        dst.dst_outros.checkbox.checked = (item.val().ficha_tecnica.dst.dst_outros.tem == "Sim") ? true : false;
        dst.dst_outros.input.value = (item.val().ficha_tecnica.dst.dst_outros.tem == "Sim") ? item.val().ficha_tecnica.dst.dst_outros.qual : "";
        (item.val().ficha_tecnica.dst.dst_outros.tem == "Sim") ? able_input(dst.dst_outros.checkbox) : null;

      }
    });
});
}

function updatePaciente(){

  firebase.database().ref('paciente/' + url_obj.CPF + '/ficha_tecnica').update({
    altura: altura.value,
    peso: peso.value,
    ts: ts.value,
  });

  firebase.database().ref('paciente/' + url_obj.CPF + '/ficha_tecnica/doencas_cronicas').update({
    cancer:{
      tem:(dc.cancer.checkbox.checked) ? "Sim" : "Não",
      qual: dc.cancer.input.value
    },
    hipertensao_arterial: (dc.hipertensao_arterial.checked) ? "Sim" : "Não",
    dores_na_coluna: (dc.dores_na_coluna.checked) ? "Sim" : "Não",
    colesterol_alto: (dc.colesterol_alto.checked) ? "Sim" : "Não",
    depressao: (dc.depressao.checked) ? "Sim" : "Não",
    diabetes: (dc.diabetes.checked) ? "Sim" : "Não",
    artrite: (dc.artrite.checked) ? "Sim" : "Não",
    bronquite: (dc.bronquite.checked) ? "Sim" : "Não",
    DVC: (dc.DVC.checked) ? "Sim" : "Não",
    DRC: (dc.DRC.checked) ? "Sim" : "Não",
    dort: (dc.dort.checked) ? "Sim" : "Não",
    avc: (dc.avc.checked) ? "Sim" : "Não",
    cirrose: (dc.cirrose.checked) ? "Sim" : "Não"
  });

  firebase.database().ref('paciente/' + url_obj.CPF + '/ficha_tecnica/alergia').update({
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

  firebase.database().ref('paciente/' + url_obj.CPF + '/ficha_tecnica/dst').update({
    dst_outros: {
      tem: (dst.dst_outros.checkbox.checked)? "Sim" : "Nâo",
      qual: dst.dst_outros.input.value
    },
    dst_hpv: (dst.dst_hpv.checked) ? "Sim" : "Não",
    dst_cancro_mole: (dst.dst_cancro_mole.checked) ? "Sim" : "Não",
    dst_aids: (dst.dst_aids.checked) ? "Sim" : "Não",
    dst_htvl: (dst.dst_htvl.checked) ? "Sim" : "Não",
    dst_mycoplasma: (dst.dst_mycoplasma.checked) ? "Sim" : "Não",
    dst_gonorreia: (dst.dst_gonorreia.checked) ? "Sim" : "Não",
    dst_clamidia: (dst.dst_clamidia.checked) ? "Sim" : "Não",
    dst_pelvica: (dst.dst_pelvica.checked) ? "Sim" : "Não",
    dst_sifilis: (dst.dst_sifilis.checked) ? "Sim" : "Não",
    dst_ebola: (dst.dst_ebola.checked) ? "Sim" : "Não",
    dst_herpes: (dst.dst_herpes.checked) ? "Sim" : "Não",
    dst_donovanose: (dst.dst_donovanose.checked) ? "Sim" : "Não",
    dst_hepatites: (dst.dst_hepatites.checked) ? "Sim" : "Não",
    dst_linfogranuloma: (dst.dst_linfogranuloma.checked) ? "Sim" : "Não",
    dst_tricomoniase: (dst.dst_tricomoniase.checked) ? "Sim" : "Não",
    dst_sida: (dst.dst_sida.checked) ? "Sim" : "Não",
    dst_hepatiteB: (dst.dst_hepatiteB.checked) ? "Sim" : "Não"
  });
  alert("Salvo");
}


function able_input(something){
  document.getElementById(something.id+"_input").disabled = !document.getElementById(something.id+"_input").disabled;
}

function queryObj() {
  var result = {}, keyValuePairs = location.search.slice(1).split("&");
  keyValuePairs.forEach(function(keyValuePair) {
    keyValuePair = keyValuePair.split('=');
    result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
  });
  return result;
}