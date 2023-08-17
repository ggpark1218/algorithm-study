function solution(n) {
    let ans = 0;
    for(let i =1 ;i<=n; i++){
        if(i%2===0){
            ans+=i;
        }
    }
    return ans;
}