function solution(my_string) {
    const arr=[...my_string];
    return arr.filter((e,idx)=>{ return my_string.indexOf(e) === idx}).join("");
    
}