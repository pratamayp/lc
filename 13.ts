function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]];
    const next = map[s[i + 1]];

    if (cur < next) {
      num -= cur;
    } else {
      num += cur;
    }
  }

  return num;
}

romanToInt('MCMXCIV');
