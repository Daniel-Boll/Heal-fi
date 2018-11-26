let url__obj = queryObj();

function queryObj() {
  var result = {}, keyValuePairs = location.search.slice(1).split("&");
  keyValuePairs.forEach(function(keyValuePair) {
    keyValuePair = keyValuePair.split('=');
    result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
  });
  return result;
}

function home_paciente(){
    location.href = "home_paciente.html?CPF="+url__obj.CPF;
}

function ficha_tecnica_paciente(){
    location.href = "ficha_tecnica_paciente.html?CPF="+url__obj.CPF;
}

function consultas_paciente(){
    location.href = "consultas_paciente.html?CPF="+url__obj.CPF;
}

function exames_paciente(){
    location.href = "exames_paciente.html?CPF="+url__obj.CPF;
}

function receitas_paciente(){
    location.href = "receitas_paciente.html?CPF="+url__obj.CPF;
}

function historico_paciente(){
    location.href = "historico_paciente.html?CPF="+url__obj.CPF;
}