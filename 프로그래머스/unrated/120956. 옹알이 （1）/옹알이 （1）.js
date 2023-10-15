function solution(babbling) {
    let answer = 0;
    const a = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(v1 => {
        a.forEach(v2 => {
            if(v1.includes(v2)) {
                v1 = v1.split(v2).join(' ');
            }
        })
        
            if(v1.trim().length === 0) answer++;
    })
    return answer;
}