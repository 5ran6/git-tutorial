class Calculator {
  constructor() {
    this.history = [];
  }

  add(...numbers) {
    const result = numbers.reduce((sum, num) => sum + num, 0);
    this.history.push({ operation: "add", numbers, result });
    return result;
  }

  subtract(...numbers) {
    const result = numbers.reduce((diff, num, idx) =>
      idx === 0 ? num : diff - num
    );
    this.history.push({ operation: "subtract", numbers, result });
    return result;
  }

  multiply(...numbers) {
    const result = numbers.reduce((product, num) => product * num, 1);
    this.history.push({ operation: "multiply", numbers, result });
    return result;
  }

  multiply(...numbers) {
    const result = numbers.reduce((product, num) => product * num, 1);
    this.history.push({ operation: "multiply", numbers, result });
    return result;
  }

  divide(...numbers) {
    if (numbers.slice(1).includes(0)) {
      throw new Error("Division by zero is not allowed");
    }
    const result = numbers.reduce((quotient, num, idx) =>
      idx === 0 ? num : quotient / num
    );
    this.history.push({ operation: "divide", numbers, result });
    return result;
  }

  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this.history.push({
      operation: "power",
      numbers: [base, exponent],
      result,
    });
    return result;
  }

  sqrt(number) {
    if (number < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    const result = Math.sqrt(number);
    this.history.push({ operation: "sqrt", numbers: [number], result });
    return result;
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}

const calc = new Calculator();
console.log(calc.add(1, 2, 3)); // 6
console.log(calc.subtract(10, 5, 3)); // 2
console.log(calc.multiply(2, 3, 4)); // 24
console.log(calc.divide(100, 2, 2)); // 25
console.log(calc.power(2, 3)); // 8
console.log(calc.sqrt(16)); // 4
console.log(calc.getHistory()); // Shows operation history
