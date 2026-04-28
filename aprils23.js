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


// 24/4/26

let NewArr = [12, 100, 450, 150];
let Resutls = 0;

for (let i = 0; i < NewArr.length; i++) {
    Resutls += NewArr[i];

}
console.log("Sum of Array Is", Resutls);

// Palindrome Number Checking


let palin = 5;
let drome = 0;
let temp = palin;

while (palin > 0) {
    let r = palin % 10;
    drome = drome * 10 + r;
    palin = Math.floor(palin / 10);

}

if (temp == drome) {
    console.log(" Number...", temp);

} else {
    console.log(" Not Palindrome Number...", temp);
}


// palindrome in string

let Strpalin = 'swapnil';
let palinRes = '';

for (let i = Strpalin.length - 1; i >= 0; i--) {
    palinRes = palinRes + Strpalin[i];
}

if (Strpalin == palin) {
    console.log("Palindrome String Name=", Strpalin);

} else {
    console.log("Palindrome String Name Not =", Strpalin);
}

//Armstrong Number cheking

let Arms = 153;
let Armsum = 0;
let Armstemp = Arms;


while (Arms > 0) {
    let ArmsR = Arms % 10;
    Armsum += ArmsR * ArmsR * ArmsR;
    Arms = Math.floor(Arms / 10);
}

if (Armsum == Armstemp) {
    console.log(" Armstrong Number...", Armstemp);
} else {
    console.log(" Armstrong Not Number...", Armstemp);
}


// Factorial of a Number

let FactNum = 9;
let fact = 1;

for (let i = 1; i <= FactNum; i++) {
    fact = fact * i;
}
console.log("Factorial of a Number = ", fact);


//Prime Number Checking

let num3 = 18;

if (num3 % 2 == 0) {
    console.log("The Prime Number...", num3);
} else {
    console.log("The Prime Not  Number...", num3);
}

//Sum, Max, Min in Array

let ArrNum = [10, 5, 64, 4, 82, 12, 36];
let SumNum = 0;
let MinNum = ArrNum[0];
let MaxNum = ArrNum[0];

for (let i = 0; i < ArrNum.length; i++) {
    SumNum += ArrNum[i];

    if (ArrNum[i] > MinNum) {
        MinNum = ArrNum[i];
    }
    if (ArrNum[i] < MaxNum) {
        MaxNum = ArrNum[i];
    }
}

console.log("Sum Number", SumNum);
console.log("Max Number", MinNum);
console.log("Min Number", MaxNum);

// Smallest Number in Array

let arr = [12, 25, 45, 18, 35, 20];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < smallest) {
        smallest = arr[i];

    }
}


console.log("Smallest Number", smallest);


// Largest Number

let arr1 = [12, 25, 45, 18, 35, 20];
let largest = arr1[0];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i];
    }
}
console.log("Largest Number", largest);

// Vowels checking in String
// Vowels Counting in String

let StringName = "swapnil";
let count = 0;

for (let i = 0; i < StringName.length; i++) {
    if ("aeiouAEIOU".includes(StringName[i])) {
        console.log("Vowels found in String:", StringName[i]);
        count++;
    }
}
console.log("Number of Vowels:", count);

//Count Words in String

let str = "Hello World! Welcome to JavaScript programming.";
console.log("Total Count Words in String = ", str.length);

//Merge Two Arrays

let arr2 = [5, 10, 15, 20];
let arr3 = [25, 30, 35, 40];

let MergedArray = arr2.concat(arr3);
console.log("Merged Array:", MergedArray);

//Remove Duplicate from String

let ArrString = "programming";
let duplicateString = '';


for (let i = 0; i < ArrString.length; i++) {
    if (!duplicateString.includes(ArrString[i])) {
        duplicateString += ArrString[i];
    }
}

console.log("String after removing duplicates:", duplicateString);

//Remove Duplicate from Array Number

let DuplicateNum=[1, 5, 6, 5, 1, 5, 9, 7, 8, 3, 2, 4, 1, 2, 4, 3];
let DuplicateArrays=[];

for(let i=0;i<DuplicateNum.length;i++){
    if (!DuplicateArrays.includes(DuplicateNum[i])) {
        DuplicateArrays.push(DuplicateNum[i]);
    }
}

console.log("Array after removing duplicates numbers:",DuplicateArrays);


//IMP Example of Set and Flat Array

//Set 

const duplicateNum = new Set([1, 1, 2, 3, 5, 6, 7, 1, 4, 6, 4, 2, 3, 4, 6, 9]);
console.log(duplicateNum);

//Flat Array

let Array = [1, 2, [5, 6], [5, 4, 8, [8, 9]]];
console.log(Array.flat(2));

var arr8 = [10, 20, 30, 40];
var newarr = arr8.map((el) => el * 5);
console.log(newarr);
//[ 50, 100, 150, 200 ]

//25/4/26

//Pattern Printing Triangle

