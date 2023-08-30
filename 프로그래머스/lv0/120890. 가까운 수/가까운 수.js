function solution(array, n) {
    array.sort((a, b) => a-b);
    let newArr =[];
    let min = 0;
    let minIdx = 0;
    
    //n에서 빼서 절댓값
    //array.map((num, i) => (newArr[i] = Math.abs(n-num)));
    
    //작은 값 찾기, 그 인덱스를 가리키는 원래 배열의 숫자 출력
    

    for (let i = 0; i < array.length; i++) {
        newArr.push(Math.abs(n-array[i]))
        min = Math.min(...newArr);
        minIdx = newArr.indexOf(min);
    } 
    
    return array[minIdx];
}