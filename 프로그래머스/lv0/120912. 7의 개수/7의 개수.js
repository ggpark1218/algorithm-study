function solution(array) {
    let cnt =0;
    array.join('').split('').forEach(n => {
        if(n === '7') cnt+=1;
    });
    return cnt;
}