const sorteio = (bet) => {
    const randomNumber = Math.random() * ((5 - 1) + 1);
    if (bet === Math.ceil(randomNumber)) {
      return 'Parabéns você ganhou'
    }else {
      return 'Tente Novamente';
    }
};
console.log(sorteio(2));