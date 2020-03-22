export class G964 {
    public static iterPi(epsilon: number): number[] {
        let approx = 4;
        let denom = 3;
        let sign = -1;
        let iter = 1;
        while (Math.abs(approx - Math.PI) > epsilon) {
            approx += sign * 4 / denom;
            denom += 2;
            sign *= -1;
            
            iter++;
        }
        return [iter, Number(approx.toFixed(10))];
    }
}
