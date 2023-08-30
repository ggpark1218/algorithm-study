function solution(order) {
    let arr = [...String(order)];
    let cnt = 0;
    arr.map((number, index) => {
        if(number === "3"|| number === "6"|| number ==="9"){
            cnt +=1;
        }
    });
    
    return cnt;
}