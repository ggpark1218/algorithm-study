function solution(my_string, n) {
    const arr = [...my_string];
    let str = '';
    for(let i=0 ; i < arr.length; i++){
        for(let j=0 ; j < n; j++){
            str += arr[i];
        }
    }
    return str;
}