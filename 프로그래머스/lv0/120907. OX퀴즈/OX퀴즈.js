function solution(quiz) {
    let res = [];
    let t = 0;
    quiz.map(e=>{
        let arr = e.split(' ');
        let cal = Number(arr[0]);
        for(let i = 1; i< arr.length; i++){
            if(arr[i] === '+'){
                cal += Number(arr[i+1]);
            }else if(arr[i] === '-'){
                cal -= Number(arr[i+1]);
            }else if(arr[i] === '='){
                t = Number(arr[i+1]);
            }else{
                continue;
            }
        }
        cal === t ? res.push("O") : res.push("X");
    });
    return res;
}