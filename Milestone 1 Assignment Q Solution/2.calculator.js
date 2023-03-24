function calculator(num1, num2, operator) {
    let result;
  
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(result);
}

calculator(2, 3, '+'); // Output: 5
calculator(10, 5, '-'); // Output: 5
calculator(4, 7, '*'); // Output: 28
calculator(10, 2, '/'); // Output: 5
calculator(5, 2, '%'); // Output: "Invalid operator"
