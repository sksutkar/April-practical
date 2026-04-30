//30/4/26

// Give me combination javascript and typescript  code  30/04/2026

//30/4/26

//Reverse a Number

// let num: number = 108;
// let rev: number = 0;

// while (num > 0) {
//     let r = num % 10;
//     rev = rev * 10 + r;
//     num = Math.floor(num / 10);
// }

// console.log("Reverses Number = " + rev);


//Reverse In String

// const revname=(revstring:string)=>[...revstring].reverse().join('');
// console.log(revname('swapnil'));

//reverse the conents of the array

// let revarr:number[]=[10,45,62,58,45,65];
// revarr.reverse();
// console.log(revarr);


//Sum of Digits of a Number

// let num: number = 7128;
// let sum: number = 0;

// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log(sum);


// Sum of Array Number

// let NewArr: number[] = [1, 5, 7, 9, 3, 1, 5, 2, 6];
// let Result: number = 0;

// for (let i = 0; i < NewArr.length; i++) {
//     Result += NewArr[i];
// }

// console.log("sum of array is", Result);


// Palindrome Number Checking

// let num:number = 185;
// let res:number = 0;
// let temp = num;

// while (num > 0) {
//     let r = num % 10;
//     res = res * 10 + r;
//     num = Math.floor(num / 10); 

// }

// if (temp == res) {
//     console.log("Palindrome Number...", temp);
// } else {
//     console.log(" Not Palindrome Number...", temp);
// }

// palindrome in string

// let Str: string = 'radar';
// let Reversed: string = '';

// for (let i = Str.length - 1; i >= 0; i--) {
//     // Reversed = Reversed + Str[i];
//      Reversed += Str[i];
// }

// if (Str == Reversed) {
//     console.log("palindrome String Name...", Str);
// } else {
//     console.log("is not palindrome String Name...", Str);
// }

// Factorial of a Number

// let fat: number = 5;
// let fact: number = 1;

// for (let i = 1; i <= fat; i++) {
//     fact = fact * i;
// }

// console.log("Factorial of a Number = ", fact);


//Armstrong Number cheking

// let num: number = 153;
// let sum: number = 0;
// let temp = num;
// while (num > 0) {
//     let r = num % 10;
//     sum += r * r * r;
//     num = Math.floor(num / 10);
// }

// if (sum == temp) {
//     console.log(" Armstrong Number...", temp);
// } else {
//     console.log("Not Armstrong Number", temp);
// }

//Prime Number Checking

// let num: number = 18;

// if (num % 2 == 0) {
//     console.log("The Prime Number...", num);
// } else {
//     console.log("The Prime Not  Number...", num);
// }

//Sum, Max, Min in Array

// let NewArr: number[] = [10, 5, 64, 8, 7, 50, 48];

// let sum: number = 0;
// let max: number = NewArr[0];
// let min: number = NewArr[0];

// for (let i = 0; i < NewArr.length; i++) {
//     sum += NewArr[i];

//     if (NewArr[i] > max) {
//         max = NewArr[i];
//     }
//     if (NewArr[i] < min) {
//         min = NewArr[i];
//     }
// }

// console.log("Sum Number=" + sum);
// console.log("Max Number=" + max);
// console.log("Min Number=" + min);


// Smallest Number in Array

// let arr: number[] = [12, 25, 45, 18, 35, 20];
// let smallest: number = arr[0];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < smallest) {
//         smallest = arr[i];

//     }
// }


// console.log("Smallest Number", smallest);


// Largest Number

// let arr1: number[] = [12, 25, 45, 18, 35, 20];
// let largest: number = arr1[0];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > largest) {
//         largest = arr1[i];
//     }
// }
// console.log("Largest Number", largest);


// Vowels checking in String
//Vowels  Counting in String

// let StringVowels: string = 'swapnil';
// let count: number = 0;

// for (let i = 0; i < StringVowels.length; i++) {
//     if ("aeiouAEIOU".includes(StringVowels[i])) {
//         console.log("Vowels found in String:", StringVowels[i]);
//     }
// }

// console.log("Number of Vowels:", count);


//Merge Two Arrays

// let arr:number[] = [5, 10, 15, 20];
// let arr1:number[] = [25, 30, 35, 40];

// let MergedArray = arr1.concat(arr1);
// console.log("Merged Array:", MergedArray);

//Count Words in String

// let str:string = "Hello World! Welcome to JavaScript programming.";
// console.log("Total Count Words in String = ", str.length);


//Remove Duplicate from String

// let RemovesString: string = 'programming';
// let DupalicateString = '';

// for (let i = 0; i < RemovesString.length; i++) {
//     if (!DupalicateString.includes(RemovesString[i])) {
//         DupalicateString += RemovesString[i];
//     }
// }
// console.log("String after removing duplicates=" + DupalicateString);

// let ArrNumber:number[]=[1,5,4,6,8,1,5,6,8,9,4,7,3,6,4,3,6,1];
// let DupalicateNumber=[];


// let ArrNumber: number[] = [1, 5, 4, 6, 8, 1, 5, 6, 8, 9, 4, 7, 3, 6, 4, 3, 6, 1];
// let DupalicateNumber:any=[];

// for (let i = 0; i < ArrNumber.length; i++) {
//     if (!DupalicateNumber.includes(ArrNumber[i])) {
//         DupalicateNumber.push(ArrNumber[i]);
//     }
// }

// console.log("Array after removing duplicates numbers:"+DupalicateNumber);


//IMP Example of Set and Flat Array

//Set 

// const duplicateNum= new Set([1, 1, 2, 3, 5, 6, 7, 1, 4, 6, 4, 2, 3, 4, 6, 9]);
// console.log(duplicateNum);


// var arr:number[] = [10, 20, 30, 40];
// var newarr = arr.map((el) => el * 5);
// console.log(newarr);


//Pattern Printing Triangle

// let PN:number = 5;
// console.log("Pattern Printing Triangle");
// for (let i = 1; i <= PN; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += "*"
//     }
//     console.log(row);
// }


//Number Triangle Pattern

// console.log("Number Triangle Pattern");

// let PN:number = 5;
// for (let i = 1; i <= PN; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + " "
//     }
//     console.log(row);
// }


//fibonacci of number series

// let fiba: number = 5;
// let a: number = 0, b: number = 1;


// console.log("Fibonacci of number series");

// for (let i = 1; i <= fiba; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;

// }


//Missing Number Array

// function missingNum(nums: number[]): number[] {
//   const missingNumArray: number[] = [];

//   for (let i = Math.min(...nums); i <= Math.max(...nums); i++) {
//     if (!nums.includes(i)) {
//       missingNumArray.push(i);
//     }
//   }

//   return missingNumArray;
// }

// console.log("Missing Number Array:");
// console.log(missingNum([1, 2, 3, 7, 8, 9]));


//Binary  search  and Linear Search 


// let Searching:number[]=[1,5,46,8,42,6,648,];
// let Binary:number=46;

// for(let i=0;Searching.length;i++){
//     if(Searching[i]==Binary){
//         console.log(Binary);
//         break;
//     }
// }


// Bubble Sort and Selection Sort and Insertion Sort  In Number

// let bubbleSort: number[] = [64, 34, 25, 12, 22, 11, 90];

// let sorting = bubbleSort.sort((a: number, b: number) => a - b);

// console.log("Sorted Number:", sorting);



//Bubble Sort and Selection Sort and Insertion Sort  In String

// let arr5 = ['Html', "Postman", "Jira", "Css", "Js", "Bootstrap", "Ts", "Angular"];
// arr5.sort();
// console.log("Bubble Sort String ", arr5);



// let arr6 = [1, 2, [5, 6], [5, 4, 8, [8, 9]]];

// Step 1: Flatten the array
// let flat = arr6.flat(Infinity);

// Step 2: Remove duplicates using Set
// let unique = [...new Set(flat)];

// Step 3: Sort the array
// let result = unique.sort((a, b) => a - b);

// console.log(result);

//


// let Savings = 0;
// let traget = 500;

// while (Savings < traget) {
//     Savings += 100;
//     console.log("saving money", Savings);
// }

// 

// const books = ["Math", "Science", "History", "English"];
// const bookToFind = "Math";

// for (let i = 0; i < books.length; i++) {
//     if (books[i] === bookToFind) {
//         console.log("Book found:", books[i]);
//         break; // Exit the loop once the book is found
//     }
// }


