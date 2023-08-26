function solution(sides) {
    const maxValue = Math.max(...sides);    
    let result = 0;
    sides.map(n => result += n);
    let others = result-maxValue;
    return maxValue < others ? 1 : 2;
}