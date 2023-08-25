function solution(n) {
    let i = 2;
    let arr = [];
    while(n!== 1){
        if(n%i==0){
            arr.push(i);
            n/=i;
            i=2;
        }else{
            i++;
        }
    }
    //배열에서 겹치는 것 삭제
    const set = new Set(arr);
    return [...set];
    
}