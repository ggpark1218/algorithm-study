function solution(cipher, code) {
    let arr = [...cipher];
    let answer = [];
    //idx를 0부터가 아닌 1부터로 맞춰주기 위해 unshift 사용
    arr.unshift("");
    arr.map((num, idx) => {
        if(idx % code === 0){
            answer.push(num);
        }
    });
    return answer.join('');
}