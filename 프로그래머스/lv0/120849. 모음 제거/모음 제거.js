function solution(my_string) {
    const aeiou = 'aeiou';
    let newString = my_string.split('');
    for(let i = 0; i<aeiou.length; i++){
        for(let j = 0; j<my_string.length; j++){
            if(newString.includes(aeiou[i])){
            newString.splice(newString.indexOf(aeiou[i]), 1)
            } 
        }  
    }
    return newString.join('');
    
    // return my_string.replace(/['a','e','i','o','u']/g,'');
    
}