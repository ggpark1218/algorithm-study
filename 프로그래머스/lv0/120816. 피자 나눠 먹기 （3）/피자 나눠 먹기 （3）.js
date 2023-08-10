function solution(slice, n) {
    var ans = (n%slice === 0) ? n/slice : n/slice+1;
    return parseInt(ans);
}