function solution(polynomial) {
    let totalX=0;
    let totalZ=0;
    const regex = /x$/g;
    let ans;
    polynomial.split(' ').forEach(v => {
        if(v.match(regex)){
            if(!parseInt(v)){
                totalX+=1;
            }else{
                totalX+=parseInt(v);
            }
        }else if(v.match(/\d/g)){
            totalZ+=parseInt(v);
        }
    });
    
    if(totalX==1){
        ans = totalZ ==0? 'x': 'x + '+totalZ;
    }else if(totalX==0){
        ans = totalZ.toString();
    }else{
        ans = totalZ ==0? totalX+'x': totalX+'x + '+totalZ;
    }
    return ans;


}