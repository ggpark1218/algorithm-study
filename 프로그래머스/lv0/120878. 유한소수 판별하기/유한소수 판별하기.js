function solution(a, b) {
// 1. 약분 되는지 판단하기 -> 최대 공약수를 구해야 함.
// 2. 기약분수로 나타내기 -> 분자, 분모를 최대 공약수로 나누어야 함. 이 문제에서는 분모만 나누면 됨
// 3. 분모의 소인수 구하기 -> 약분된 분모를 소인수분해 해야 함. 문제 설명에 있는 것처럼 2, 5라면 유한소수, 아니라면 무한소수 / 여기에서 주의할 점은 2와 5만 존재해야 한다.
    let gcd = 1;
    for ( let i = 2; i <= Math.min(a, b); i ++ ){
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    let gcdA = a / gcd;
    let gcdB = b / gcd;
    
    while (gcdB % 2 == 0 && gcdB != 1) {
        gcdB /= 2;
    }
    
    while (gcdB % 5 == 0 && gcdB != 1) {
        gcdB /= 5;
    }
    
    let ans = gcdB === 1 ? 1 : 2;
    return ans;
}