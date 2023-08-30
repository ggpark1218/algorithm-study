function solution(s) {
    let arr = [...s];
    let ans = [];
    arr.sort().forEach((item) => {
        //앞에서부터 봤을 때와 뒤에서부터 봤을 때 같은 item이 같은 index에 있으면 중복이 아님
        if(s.indexOf(item) === s.lastIndexOf(item)){
            ans.push(item);
        }
    })
    return ans.join('');
}