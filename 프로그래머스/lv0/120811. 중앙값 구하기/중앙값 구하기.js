function solution(array) {
    var arr = [];
    arr = array.sort(function (a, b) { return a - b });
    mid = parseInt(arr.length/2);
    return arr[mid];
}