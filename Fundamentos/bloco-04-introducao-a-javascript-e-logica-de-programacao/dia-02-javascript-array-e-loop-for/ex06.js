let numbers = [4, 2, 6, 20, 70, 8, 100, 2, 34, 28];
odds = 0;

for (index = 0; index < numbers.length; index +=1) {
    if ((numbers[index] % 2)!== 0) {
        odds +=1
    }
}
if (odds === 0) {
    console.log ("nenhum valor impar encontrado")
} else {
    console.log (odds)
}