//23/4/26

//Reverse a Number

let num = 145;
let res = 0;

while (num > 0) {
    let r = num % 10;
    res = res * 10 + r;
    num = Math.floor(num / 10);
}

console.log("The Reverse Number :",res);

//Reverse In String

const  ResStr=StrName=>[...StrName].reverse().join('');
console.log(ResStr('swapnil'));

