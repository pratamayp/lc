function test(n) {
  const temp = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      temp.push('Fizz Buzz');
    } else if (i % 3 === 0) {
      temp.push('Fizz');
    } else if (i % 5 === 0) {
      temp.push('Buzz');
    } else {
      temp.push(i);
    }
  }
  return temp;
}

function testes6(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    return num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num;
  });
}

console.log(test(15))
console.log(testes6(15))