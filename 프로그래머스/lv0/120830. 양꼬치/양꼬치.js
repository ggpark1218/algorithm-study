function solution(n, k) {
    let total = 0;
    total = n*12000 + k*2000;
    total -= parseInt(n/10)*2000;
    return total;
}