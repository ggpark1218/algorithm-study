function solution(n) {
    let result = 0;
    n%7==0 ? result = parseInt(n/7) : result = parseInt(n/7)+1;
    
    
    return result;
}