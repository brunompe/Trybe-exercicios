function createStateDropdown () {
  const stateList = document.getElementById('estados-lista');
  let estados = [
    'Selecione seu estado',
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
    ];
    for (let i = 0; i < estados.length; i += 1) {
      let addEstado = estados[i];
      let option = document.createElement('option');
      option.innerText = addEstado;
      stateList.appendChild(option);
    }
}
createStateDropdown();
