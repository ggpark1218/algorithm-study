function solution(score) {
    let ans =[];
  	let avg = score.map(v=>(v[0]+v[1])/2);
    let sorted = [...avg].sort((a,b)=>b-a);
    for(let n of avg){
        ans.push(sorted.indexOf(n)+1);
    }
    return ans;
}