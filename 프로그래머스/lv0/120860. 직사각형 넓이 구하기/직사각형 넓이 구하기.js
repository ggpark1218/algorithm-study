function solution(dots) {
    // dots.sort((a,b)=>a[0] - b[0]);
    dots.sort();
    let h = Math.abs(dots[1][1] - dots[0][1]);
    let w = Math.abs(dots[2][0] - dots[1][0]);
    return h*w;
}