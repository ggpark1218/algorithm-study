function solution(my_string) {
    let str = [...my_string];
    let arr = [];
    str.map((n,i) => {
        if (str[i] === str[i].toUpperCase()) {
		    arr.push(str[i].toLowerCase());
	    } else { 
		    arr.push(str[i].toUpperCase());
	    }
    });

    return arr.join('');
}