export function descendingOrder(n: number) : number {
    const digitArr = String(n).split('');
    const sortedDigits = digitArr.sort((a,b) => Number(b) - Number(a));
    return Number(sortedDigits.join(''));
}