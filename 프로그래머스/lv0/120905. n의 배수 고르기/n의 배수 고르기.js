function solution(n, numlist) {
    let arr = [];
    numlist.map((e,i) => {
        if(e%n == 0 ){
            arr.push(e);
        }
    });
    return arr;
}