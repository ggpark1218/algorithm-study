function solution(n) {
    let cnt = 0;
    for(let i = 1 ; i <= n ; i ++) {
        if(n%i === 0) cnt++;
    }
    return cnt;
}
//약수의 수는 순서쌍의 수랑 같아서