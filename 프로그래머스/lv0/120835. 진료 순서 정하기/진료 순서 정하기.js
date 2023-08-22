function solution(emergency) {
    let desc = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>desc.indexOf(v)+1);
}