function solution(n) {
    const div = [];
    //n의 약수들은 n의 제곱근 보다 작음
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0) {
            div.push(i);
            if(n / i != i){
                div.push(n / i);
            }
        }
    }
    return div.sort((a,b) => (a-b));
    
}
