function plusOne(digits: number[]): number[] {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }

  return [1, ...digits];
}

plusOne([9, 9]);
