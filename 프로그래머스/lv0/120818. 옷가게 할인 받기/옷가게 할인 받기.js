function solution(price) {
    const ans = (price >= 100000 && price <300000) ? Math.floor(price*0.95)
    : (price >= 300000 && price <500000) ? Math.floor(price*0.9)
    : (price >= 500000) ? Math.floor(price*0.8) 
    : price ;
    return ans;
}