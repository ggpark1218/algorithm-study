function solution(my_string) {
    let result = 0;
    const arr = my_string.match(/[0-9]/g).map(n => (result += Number(n)));
    return result;
}