let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum  = 0;

for (index = 0; index < numbers.length; index +=1) {
    let counter = numbers[index];
    sum = sum + counter;

}
let average = (sum / numbers.length);
console.log(average);