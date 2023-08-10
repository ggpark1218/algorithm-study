function solution(n) {
    let box = 6;
    while(box%n !== 0){
        box+=6;
    }
    let ans = box/6;
    return ans;
}