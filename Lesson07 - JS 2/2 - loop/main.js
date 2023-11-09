// 1. prompt ашиглан хэрэглэгчээс n хувьсагчид гэсэн утга авч
//  console-руу n удаа "Codely №1" гэж хэвлэ.
// n=4
// let n = prompt('Та n тоог оруулна уу?');

// for (
//     let i = 1;
//     // 4 <= 4
//     i <= n;
//     i++) {
//     console.log('Codely №' + i);
// }

// 2. prompt ашиглан хэрэглэгчээс n гэсэн тоог авч console - руу
//  n - ээс эхлэн 1 хүртэл тоонуудыг хэвлэн харуулаарай.
// let n = prompt('Та n тоог оруулна уу?');
// // n=5
// for (let i = n; i > 0; i--) {
//     console.log(i);
// }

// 3. prompt ашиглан хэрэглэгчээс n гэсэн тоог
// авч n хүртэлх тооны нийлбэрийг олж alert ашиглан харуулаарай
// n = 3 
// 1 + 2 + 3 = 6
let n = prompt('n тоог оруулна уу.')
// i= 1 , n =3 , 4<=3
let niilber = 0;
for (let i = 1; i <= n; i++) {
    niilber += i;
    console.log('i=' + i + ', niilber=' + niilber);
}
alert(niilber)
// i = 1 , niilber = 0 +1 = 1
// i = 2 , niilber = 1 + 2 = 3
// i = 3 , niilber = 3 + 3 = 6
