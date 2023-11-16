// 1.Palindrom
const isPalindrome = (too) => {
    // String-г  урвуулж бичээд анхны утгатай шалгахад тэнцүү байх ёстой
    // "1234" === "4321"
    //  "1221"  => "1221" 
    // reverse
    const tooArr = too.split('')
    // 1234 => 4
    const reversedArr = [];
    for (let i = tooArr.length - 1; i >= 0; i--) {
        const element = tooArr[i];
        // console.log(element);
        reversedArr.push(element);
    }
    // console.log(reversedArr);
    const reversedStr = reversedArr.join('')
    return too == reversedStr;

}


// const too = prompt('Too oruulna uu.')
// isPalindrome(too)





const allPalindrome = (too) => {
    const all = [];
    for (let i = 0; i <= too; i++) {
        if (isPalindrome(i + ''))
            all.push(i);
    }
    console.log(all);
}

const too = prompt('Too oruulna uu.')
allPalindrome(too)

