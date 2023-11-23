// const numbers = [1, 2, 3, 4, 5]
// const reverseArray = (toonuud) => {
//     console.log(toonuud);
//     let urvuu = []
//     for (let i = toonuud.length - 1; i >= 0; i--) {
//         console.log(toonuud[i])
//         urvuu.push(toonuud[i]);
//     }
//     return urvuu
// }

// console.log(reverseArray(numbers))



const numbers = [3, 55, 5, 1, 12, 7, 8]

const findLargestElement = (toonuud) => {
    console.log(toonuud[0]);
    let hamgiinIhToo = toonuud[0];
    // 0,1,2,3,4,5
    for (let i = 0; i < toonuud.length; i++) {
        const too = toonuud[i];
        console.log(too);
        if (too > hamgiinIhToo) {
            hamgiinIhToo = too;
        }
    }
    console.log(hamgiinIhToo)
    return hamgiinIhToo;
}

findLargestElement(numbers)


// const checkPoint = (onoo) => {
//     if (onoo >= 90) {
//         return 'A=' + onoo
//     } else if (onoo >= 80) {
//         return 'B=' + onoo
//     } else if (onoo >= 70) {
//         return 'C=' + onoo
//     } else if (onoo >= 60) {
//         return 'D=' + onoo
//     } else if (onoo < 60) {
//         return 'F=' + onoo
//     }
// }

// console.log(checkPoint(95));
// console.log(checkPoint(85));
// console.log(checkPoint(75));
// console.log(checkPoint(65));
// console.log(checkPoint(55));
// const calculateArea = (urt, urgun) => {
//     return urt * urgun
// }
// console.log(calculateArea(10, 5))
// console.log(calculateArea(123, 45))
// console.log(calculateArea(1000, 120))
// const max = (too1, too2) => {
//     if (too1 > too2) {
//         return too1
//     } else {
//         return too2
//     }
// }
// console.log(max(1000, 600));

// const totalTime = (day, time) => {
//     return day * 24 + time
// }
// const hariu = totalTime(3, 10);
// console.log(hariu);


// const calculate = (B, C, D) => {
//     return B * C - D;
// }
// console.log('A=' + calculate(5, 10, 3));