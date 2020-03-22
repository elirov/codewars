export function divisors(n: number) : number {
    const maxDivisor = Math.floor(n/2);
    if (n == 1) {
        return 1;
    }
    let divisors = 2;
    for (let i = 2; i <= maxDivisor; i++) {
        if (n % i == 0) {
            divisors ++;
        }
    }
    return divisors;
}
