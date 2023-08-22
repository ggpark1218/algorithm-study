function solution(hp) {
    let a,b,c;
    
    a = parseInt(hp/5);
    b = parseInt((hp%5)/3);
    c = ((hp%5)%3);
    
    const sum = a+b+c;
    return sum;
}