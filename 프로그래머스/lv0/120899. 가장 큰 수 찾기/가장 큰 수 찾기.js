function solution(array) {
    let arr = [];
    let a = Math.max(...array);
    arr.push(a);
    arr.push(array.indexOf(a));
    
    return arr;

}