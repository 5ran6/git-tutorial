class Calculator {
  constructor() {
    this.history = [];
  }

  add(...numbers) {
    const result = numbers.reduce((sum, num) => sum + num, 0);
    this.history.push({ operation: "add", numbers, result });
    return result;
  }
    
  // TODO: Implement the other operations like sub, mul, div
}

const calc = new Calculator();
console.log(calc.add(1, 2, 3));  // 6