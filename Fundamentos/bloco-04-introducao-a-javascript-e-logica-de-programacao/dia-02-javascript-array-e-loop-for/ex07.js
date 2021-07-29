let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

smallest = 50;

for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index]< smallest) {
        smallest = numbers[index];
    }
}
console.log (smallest);