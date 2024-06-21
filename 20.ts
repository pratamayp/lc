function isValid(s: string): boolean {
  let stack: string[] = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (Object.values(pairs).includes(char)) {
      stack.push(char);
    } else if (Object.keys(pairs).includes(char)) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

isValid('()[]{}');
