function solution(n, t) {
    let time = 0;
    while(time<t){
        n *= 2;
        time++;
    }
    return n;
}