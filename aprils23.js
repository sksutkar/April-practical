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

let SumNum = 7128;
let SumN = 0;

while (SumNum > 0) {
    SumN += SumNum % 10;
    SumNum = Math.floor(SumNum / 10);
}

console.log("The Sum of Digits = ", SumN);
