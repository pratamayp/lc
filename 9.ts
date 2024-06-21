function isPalindrome(x: number): boolean {
  // const valueString = x.toString();
  // const reversedString = x.toString().split('').reverse().join('');

  // return valueString === reversedString;

  const xs = x.toString();

  for (let i = 0; i < xs.length / 2; i++) {
    const ori = xs.charAt(i);
    const rev = xs.charAt(xs.length - i - 1);

    if (ori !== rev) {
      return false;
    }
  }
  return true;
}

isPalindrome(-10);
