let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info ['recorrente'] = 'Sim';

let infoMan = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

//console.log ('Bem Vinda, ' + info.personagem);

info ['recorrente'] = 'Sim';

//console.log (info);


//for (let properties in info) {
 /// console.log(info[properties]);
//}

//for (let properties in infoMan) {
  //console.log(infoMan[properties]);
//}

  for (let properties in info) {
    if (properties === 'recorrente' && info[properties]=== 'Sim' && infoMan[properties] === 'Sim') {
      console.log ('Ambos recorrente');
    } else {
      console.log (info[properties] + ' e ' + infoMan[properties]);
    }
  }