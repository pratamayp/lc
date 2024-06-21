function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const substr = haystack.substring(i, i + needle.length);
    if (substr === needle) {
      return i;
    }
  }
  return -1;
}

strStr('hello', 'll');
