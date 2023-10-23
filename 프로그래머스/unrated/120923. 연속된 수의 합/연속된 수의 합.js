function solution(num, total) {
    let startNum = 0;

    while (num * startNum + (num * (num - 1)) / 2 !== total) {
        if (num * startNum + (num * (num - 1)) / 2 < total) {
            startNum++;
        } else {
            startNum--;
        }
    }

    return new Array(num).fill(0).map((a, i) => i + startNum);
}
