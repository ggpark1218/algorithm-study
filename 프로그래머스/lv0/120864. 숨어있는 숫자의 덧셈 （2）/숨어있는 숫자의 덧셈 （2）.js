function solution(my_string) {
    const regex = /\d+/g;
    const matchStr = my_string.match(regex);

    if (!matchStr) {
        return 0;
    }
    return matchStr.reduce((acc, curr) => acc + parseInt(curr), 0);
}
