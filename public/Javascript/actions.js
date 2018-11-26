let url__obj = queryObj();

function queryObj() {
  var result = {}, keyValuePairs = location.search.slice(1).split("&");
  keyValuePairs.forEach(function(keyValuePair) {
    keyValuePair = keyValuePair.split('=');
    result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
  });
  return result;
}

function home(){
    location.href = "home_paciente.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function ficha_tecnica(){
    location.href = "ficha_tecnica.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function consulta_html(){
    location.href = "consultas.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function exame(){
    location.href = "exames.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function receita(){
    location.href = "receitas.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function historico(){
    location.href = "historico.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function perfil_profissional(){
  location.href = "perfil_profissional.html?CRM="+url__obj.CRM+"&CPF="+url__obj.CPF;
}

function sair(){
    location.href = "home.html?CRM="+url__obj.CRM;
}