function solution(chicken) {
    let coupon = chicken / 10;
    let cnt = coupon;
    while(coupon >= 1){
        coupon /= 10;
        cnt += coupon;
    }
    return Math.floor(cnt);
    
}