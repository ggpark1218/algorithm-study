	
function solution(lines) {
    let arr = [];
    let cnt = 0;
    
    lines.forEach(([x1, x2]) => {
        for(let i = x1; i < x2; i++) {
            arr.push(i.toString() + (i+1).toString());
        }
    });
    
    const filteredArray = arr.filter((v) => arr.indexOf(v) !== arr.lastIndexOf(v));
    return [...new Set(filteredArray)].length;
}