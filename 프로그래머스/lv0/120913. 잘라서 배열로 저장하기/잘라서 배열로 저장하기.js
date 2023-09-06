function solution(my_str, n) {
    let i = 0;
    let arr = [];
    while(i<my_str.length){
        arr.push([...my_str].splice(i, n).join(''));
        i+=n;
    }
    return arr;
}