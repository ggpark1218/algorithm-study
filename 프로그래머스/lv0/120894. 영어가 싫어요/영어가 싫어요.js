// function solution(numbers) {
//     const repNum = numbers
//                 .replace("zero", "0")
//                 .replace("one", "1")
//                 .replace("two", "2")
//                 .replace("three", "3")
//                 .replace("four", "4")
//                 .replace("five", "5")
//                 .replace("six", "6")
//                 .replace("seven", "7")
//                 .replace("eight", "8")
//                 .replace("nine", "9")
//     return parseInt(repNum);
// }

function solution(numbers) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < arr.length; i++) {
        numbers = numbers.split(arr[i]).join(i);
    }

    return parseInt(numbers);
}
