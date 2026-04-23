//23/4/26

//Reverse a Number

let num = 145;
let res = 0;

while (num > 0) {
    let r = num % 10;
    res = res * 10 + r;
    num = Math.floor(num / 10);
}

console.log("The Reverse Number :", res);

//Reverse In String

const ResStr = StrName => [...StrName].reverse().join('');
console.log(ResStr('swapnil'));


let ResNumbar = [1, 25, 64, 8, 23, 85];
ResNumbar.reverse();
console.log("Reversed Number = ", ResNumbar);

//Sum of Digits of a Number

let Sum_Num = 7128;
let SN = 0;

while (Sum_Num > 0) {
    SN += Sum_Num % 10;
    Sum_Num = Math.floor(Sum_Num / 10);
}

console.log("The Sum of Digits = ", SN);
