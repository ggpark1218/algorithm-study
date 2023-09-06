function solution(array, height) {
    return array.sort((a,b) => a-b).filter(n => n > height).length;
}