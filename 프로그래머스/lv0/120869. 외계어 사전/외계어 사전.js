function solution(spell, dic) {
    const arr = [];
    
    dic.forEach((word) => {
        let count = 0;
        spell.forEach((v) => {
            if(word.includes(v)){
                count += 1;
            }
        })
        
        if(count === spell.length){
            arr.push(word);
        }
    })
    
    return arr.length === 0 ? 2 : 1;
}