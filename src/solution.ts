export function solution(roman: string): number {
  const lookupDigit = (digit: string): number =>
    digit == 'I'
      ? 1
      : digit == 'V'
      ? 5
      : digit == 'X'
      ? 10
      : digit == 'L'
      ? 50
      : digit == 'C'
      ? 100
      : digit == 'D'
      ? 500
      : digit == 'M'
      ? 1000
      : Number.NaN;

  let sum = 0;
  let lastRomanVal = 0;
  let run = 0;
  for (let i = 0; i < roman.length; i++) {
    const romanVal = lookupDigit(roman[i]);
    if (lastRomanVal > 0 && lastRomanVal != romanVal) {
      if (romanVal > lastRomanVal) {
        sum -= run;
      } else {
        sum += run;
      }
      run = romanVal;
    } else {
      run += romanVal;
    }
    lastRomanVal = romanVal;
  }
  sum += run;
  return Number(sum);
}
