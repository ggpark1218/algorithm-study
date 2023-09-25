function solution(sides) {
    const long = Math.max(...sides);
    const longIdx = sides.indexOf(long);
    const shortIdx = (longIdx === 0 ? 1 : 0);
    
    const longSide = sides[longIdx];
    const shortSide = sides[shortIdx];
    
    let ans = shortSide;

    ans += shortSide - 1;
    
    return ans;
}