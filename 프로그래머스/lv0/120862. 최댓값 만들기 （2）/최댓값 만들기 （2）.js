function solution(numbers) {
    numbers.sort((a,b) => a-b);
    let start2 = numbers[0]*numbers[1];
    let end2 = numbers[numbers.length-1]*numbers[numbers.length-2];
    
    if (start2 >= end2) {
        return start2;
    }else {
        return end2;
    }
}