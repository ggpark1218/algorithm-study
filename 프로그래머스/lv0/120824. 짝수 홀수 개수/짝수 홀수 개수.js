function solution(num_list) {
    let arr = [];
    let oddCnt = 0;
    let evenCnt = 0;
    
    for(let i = 0 ; i < num_list.length; i++){
        num_list[i] % 2 == 0 ? evenCnt++ : oddCnt++ ;
    }
    arr.push(evenCnt);
    arr.push(oddCnt);
    
    return arr;
}