function solution(n) {
    let arr = [...String(n)];
    let sum =0;
    arr.map(e => (sum += parseInt(e)));
    return sum;
}