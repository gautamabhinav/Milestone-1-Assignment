const numbers = [12, 15, 18, 20, 21, 24, 27, 30];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
    continue;
  }
}