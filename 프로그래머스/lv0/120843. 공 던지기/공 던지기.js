function solution(numbers, k) {
    let num = numbers.length;   
    let idx = 2*(k-1)%num;
    return numbers[idx];
}