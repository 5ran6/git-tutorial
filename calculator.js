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
            idx === 0 ? num : diff - num);
        this.history.push({ operation: 'subtract', numbers, result });
        return result;
    }

    multiply(...numbers) {
        const result = numbers.reduce((product, num) => product * num, 1);
        this.history.push({ operation: 'multiply', numbers, result });
        return result;
    }

  // TODO: Implement the other operations like sub, mul, div
}

const calc = new Calculator();
console.log(calc.add(1, 2, 3));  // 6
