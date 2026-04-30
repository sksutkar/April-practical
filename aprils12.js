// 12/4/26

// let Name="swapnil";
// console.log(Name);
// console.log(Name.length);
// console.log(Name.toUpperCase());


// let x=10;
// console.log(x++);
// console.log(x);


// let x=10;
// console.log(++x);
// console.log(x);

// let x=10;
// console.log(x--);
// console.log(x);

// let x=10;
// console.log(--x);
// console.log(x);

// let a=700;
// let b=12;
// console.log(a+b);


// function add(x,y) {
//    console.log(x+y);
// }

// add(10,20);


// let a=700;
// let b=12;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);   

// let a=700;
// let b=12;

// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a === b);
// console.log(a !== b);

// let age =21;

// if(age>=18){
//     console.log("you can vote");
// }
// else{   
//      console.log("you cannot vote");
// }


// let num = 23;
// if (num > 0) {
//     console.log("number is positive");
// } else {
//     console.log("number is negative");
// }


// let num=21;
// if(num%2==0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }

// let day="sunday";

// switch(day){
//     case "monday":
//         console.log("today is monday");   
//         break;
//     case "tuesday":
//         console.log("today is tuesday");   
//         break;    
//     case "wednesday":
//         console.log("today is wednesday");
//         break;

//     case "thursday":
//         console.log("today is thursday");
//         break;

//     case "friday":
//         console.log("today is friday");
//         break;  

//     case "saturday":
//         console.log("today is saturday");
//         break;

//     case "sunday":
//         console.log("today is sunday");
//         break;
//     default:
//         console.log("invalid day");
// }


// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=1;i<=5;i++){
//     console.log("swapnil");
// }

// let Name="swapnil";

// for(let i=0;i<Name.length;i++){
//     console.log(Name[i]);
// }   


// let num = 1;

// while (num <= 5) {
//     console.log(num);
//     num++;
// }



// for(let i=2;i<=20;i=i+2){
//     console.log(i);
// }


// let Name="swapnil";
// console.log(Name.toUpperCase());

// let Name="SWAPNIL";
// console.log(Name.toLowerCase());



// let Name=["swapnil","pratik","pratiksha"];
// console.log(Name);
// console.log(Name.length);

// let Name=["swapnil","pratik","pratiksha"];
// for(let i=0;i<Name.length;i++){
//     console.log(Name[i]);
// }   


// let Name=["swapnil","pratik","pratiksha"];
// let newName=Name.join("-");
// console.log(newName);   

// let Name=["swapnil","pratik","pratiksha"];
// let Name1=Name.map(Name=>Name.toUpperCase());
// console.log(Name1);

// let New=[ 'SWAPNIL', 'PRATIK', 'PRATIKSHA' ];
// let Name=New.map(Name=>Name.toLowerCase());
// console.log(Name);          


// var student = [
//     {
//         first: "swapnil",
//         last: "sutkar",
//         age: 21
//     },
//     {
//         first: "shankar",
//         last: "shinde",
//         age: 22
//     },
//     {
//         first: "vishal",
//         last: "sutkar",
//         age: 23
//     }
// ]

// console.log(student);

// student.forEach(s=>{
//     console.log(s.first.toUpperCase());
//     console.log(s.last.toUpperCase());    
//     console.log(s.age);
// })


// let age =19;

// let IsActive=true;

// if(age>=18 && IsActive){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }



// let age =19;
// let IsActive=true;

// console.log(age<=18 && IsActive);
// console.log(age<=18 || IsActive);



// let isWeeked=true;
// let ishoilday=false;

// if(isWeeked || ishoilday){
//     console.log("you can relax");
// }else{
//     console.log("you cannot relax");
// }


// let username="swapnil";
// let password="7123";

// if(username=="swapnil" && password=="7123"){
//     console.log("login successful");
// }else{
//     console.log("login failed");
// }

// let marks=45;

// if(marks>=90){
//     console.log("grade A");
// }      else if(marks>=80){
//     console.log("grade B");
// } else {
//     console.log("grade C");
// }       


// let age=21;

// let result=age>=18 ? "you can vote" : "you cannot vote";

// console.log(result);            



// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }           



// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue; // Skip the rest of the loop when i is 3
//     }   
//     console.log(i);

// }


// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break; // Exit the loop when i is 3
//     }
//     console.log(i);
// }


// let Savings=0;
// let traget=500;

// while(Savings<traget){
//     Savings+=100;
//     console.log("saving money",Savings);
// }       



// const books = ["Math", "Science", "History", "English"];
// const bookToFind = "Math";

// for (let i = 0; i < books.length; i++) {
//     if (books[i] === bookToFind) {
//         console.log("Book found:", books[i]);
//         break; // Exit the loop once the book is found
//     }   
// }


// for (let i = 1; i <= 10; i++) {

//     if (i % 2 === 0) {
//         continue; // Skip even numbers
//     }
//     console.log(i, "is odd");
// }




// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         continue; // Skip even numbers

//     }
//     console.log(i, "is Even");
// }


// let Name = "swapnil";

// for (let i = 0; i < Name.length; i++) {
//     console.log(Name[i]);

// }


// let str = "swapnil";
// for (let char of str) {
//     console.log(char);
// }


// let NewArr = [1, 2, 3, 4, 5];

// for (let i = 0; i < NewArr.length; i++) {
//     console.log(NewArr[i]);
// }


// let NewArr = [1, 2, 3, 4, 5];
// for (let i = 0; i < NewArr.length; i++) {
//     if (NewArr[i] % 2 === 0) {
//         console.log(NewArr[i], "is Even");
//     } else {
//         console.log(NewArr[i], "is Odd");
//     }
// }


// let NewArr = [1, 2, 3, 4, 5];
// let Result=0;

// for (let i = 0; i < NewArr.length; i++) {
//     Result+=NewArr[i];
// }

// console.log("sum of array is",Result);


// let NewArr = [10, 25, 32, 44, 59];
// let Result=0;

// for (let i = 0; i < NewArr.length; i++) {
//     Result+=NewArr[i];
// }

// console.log("sum of array is",Result);



// try {
//     let x = 10 ; 
//     console.log(x);
// } catch (error) {
//     console.error("An error occurred:", error);
// }finally {    
//     console.log("This will always execute");
// }




// try {
//     let x = 10 / 0; // This will cause an error
//     console.log(x);
// } catch (error) {
//     console.error("An error occurred:", error);
// }finally {    
//     console.log("This will always execute");
// }



// 1.push()
// used to add element at the end of array.
// let arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);//[ 1, 2, 3, 4, 5 ]




// 2.pop()
// used to remove last element from an array
// let arr2=[ 1, 2, 3, 4, 5 ];
// arr2.pop();
// console.log(arr2);[ 1, 2, 3, 4 ]




// 3.unshift()
// used to add element in the first position of an array.
// let arr=[ 1, 2, 3, 4 ];
// arr.unshift(0);
// console.log(arr);//[ 0, 1, 2, 3, 4 ]




// 4.shift()
// used to remove first element of an array.


// let arr=[ 0, 1, 2, 3, 4 ]
// arr.shift();
// console.log(arr);//[ 1, 2, 3, 4 ]




// 5.indexOf
// used to find the index of element of an array.


// let arr=[ 1, 2, 3, 4 ];
// let index=arr.indexOf(3);
// console.log(index);//2


// let arr=["swapnil","sutkar","vishal","shankar"];
// let index=arr.indexOf("vishal");
// console.log(index);//2




// 6.slice()
// used to get part of an array as slice.
// slice(startIndex,endIndex)
// it will return array elements from startIndex to endIndex - 1.
//in array then it will return -1.


// let arr=[10,20,30,40,50];
// let newArr=arr.slice(0,3);
// console.log(newArr);//[ 10, 20, 30 ]


// let arr=["swapnil","sutkar","vishal","shankar"];
// let newArr=arr.slice(0,3);
// console.log(newArr);//[ 'swapnil', 'sutkar', 'vishal' ]


// splice :
// using splice method we can add element or remove elements from an array.
// Syntax:
// splice(startIndex,noOfElements,item,.....)
// noOfElements => delete count how many elements you want to remove
// -startIndex is mandatory other parameters are not mandatory based on requirement
// you can add or remove.
// -splice method modifies the original array.


// let arr =[5,10,15,20,32,25,30];
// arr.splice(4,1);
// console.log(arr);//[ 5, 10, 15, 20, 25, 30 ]


// let arr =[5,10,15,20,30];
// arr.splice(4,0,25);
// console.log(arr);//[ 5, 10, 15, 20, 25, 30 ]


// let arr=[0,10,20,30,40];
// arr.splice(0,1);
// console.log(arr);//[10, 20, 30, 40]


// let arr=[10,20,30,40,50];
// arr.splice(5,0,60,70,80,90,100);
// console.log(arr);//[
//   10, 20, 30, 40,  50,
//   60, 70, 80, 90, 100
// ]


// let x="swapnil";


// for(let char of x){
//     console.log(char);
// }


// s
// w
// a
// p
// n
// i
// l


// concat()
// -----------
// concatinating 2 arrays and returns new array


// let arr=[5,10,15];
// let arr2=[20,25,30];
// let arr3=arr.concat(arr2);
// console.log(arr3);
// [ 5, 10, 15, 20, 25, 30 ]


// var arr1 = [10,20,30];
// var arr2= [40,50,60];
// var arr3 = [70,80]
// //concat
// var newArr = arr1.concat(arr2,arr3);
// console.log(newArr);
// [ 10, 20, 30, 40, 50, 60, 70, 80]


//reverse the conents of the array


// let arr=[10,9,8,7,6,5,4,3,2,1];
// arr.reverse();
// console.log(arr);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let arr1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr1.reverse();
// console.log(arr1);//[10,9,8,7,6,5,4,3,2,1];


//sort the elements of an array alphabatic or number based on its contents.


// var techArr = ["Angular","Html","Css","Bootstrap"];
// var newTechArr = techArr.sort();
// console.log(newTechArr);//[ 'Angular', 'Bootstrap', 'Css', 'Html' ]


// let  arr=['Html',"Py","Css","Js","Bootstrap","Ts"];
// arr.sort();
// console.log(arr);// ["Bootstrap", "Css", "Html", "Js", "Py", "Ts"]


// var num = [20, 10, 60, 200, 30, 50];
// var num2 = num.sort(function (a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     else return 0;
// });
// console.log(num2);//[ 10, 20, 30, 50, 60, 200 ]




// let num=[5,15,10,30,25,20,40,45,35,50];
// let num2=num.sort(function(x,y){
// if(x>y) return 1;
// if(x<y)return -1;
// else return 0;
// });


// console.log(num2);//[5,10,15,20,25,30,35,40,45,50]


// -filter method will filter the element based on some condition and it will creates new
// array with element.
// -filter method doesn't modify the original array but it returns new array.


// let ages =[17,18,12,19,25,32,21];
// let adutls=ages.filter(ages=>ages>=18);
// console.log(adutls);//[ 18, 19, 25, 32, 21 ]


// var productArr = [
//     { productName: "Mobile", price: 30000, category: "Mobiles" },
//     { productName: "Table", price: 4000, category: "furniture" },
//     { productName: "Laptop", price: 50000, category: "electronics" },
//     { productName: "Tv", price: 25000, category: "electronics" },
// ]
// var newArr = productArr.filter(function (item) {
//     if (item.category == "electronics") {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(newArr);




// [
//   { productName: 'Laptop', price: 50000, category: 'electronics' },
//   { productName: 'Tv', price: 25000, category: 'electronics' }
// ]


// using Arrow function(shortest syntax)
// ------------
// var newArr = productArr.filter((item:any)=> item.category == "electronics");
// console.log(newArr)




// let sum=[5,10,15,20,25,30,35,40,45,50];
// let sumnum=sum.filter(sum=>(sum%2==0));
// console.log(sumnum);
//[ 10, 20, 30, 40, 50 ]




// let odd=[5,10,15,20,25,30,35,40,45,50];
// let oddnum=odd.filter(odd=>(odd%2!==0));
// console.log(oddnum);


//[ 5, 15, 25, 35, 45 ]




// var productArr = [
//     { productName: "Mobile", price: 30000, category: "Mobiles" },
//     { productName: "Table", price: 4000, category: "furniture" },
//     { productName: "Laptop", price: 50000, category: "electronics" },
//     { productName: "Tv", price: 25000, category: "electronics" },
// ]


// using arrow function
// --------------
// var newArr = productArr.map((el) => {
//     el.price = el.price - 100;
//     return el;
// })
// console.log(newArr);


// [
//   { productName: 'Mobile', price: 29900, category: 'Mobiles' },
//   { productName: 'Table', price: 3900, category: 'furniture' },
//   { productName: 'Laptop', price: 49900, category: 'electronics' },
//   { productName: 'Tv', price: 24900, category: 'electronics' }
// ]




// var arr = [10, 20, 30, 40];
// var newarr = arr.map((el) => el * 5);
// console.log(newarr);
// //[ 50, 100, 150, 200 ]


// reduce()
// ==========
// reduce() method used to reduce elements/values of array into a single value.




// let price= [10, 2, 700];
// let total=price.reduce((sum,price)=>sum +price,0);
// console.log(total);//712




// let arr= [10, 2, 700];
// let result=0;


// for(let n=0;n<arr.length;n++){
//     result=result+arr[n];
// }
// console.log(result);//712

// let Arr=[10,2,3,5,4];
// Arr.pop();
// console.log(Arr);

// Arr.push(1);
// console.log(Arr);

// let Arr=[1,2,3,4,5];
// Arr.unshift(0);
// let Arr1=[0,1,2,3,4,5];
// Arr1.shift()
// console.log(Arr);

// let Arr=[5,10,5,6];
// let index=Arr.indexOf(10);
// console.log(index);

// arr=["swapnil","vishal","shankar"];
// let index=arr.indexOf("shankar");
// console.log(index);

// let Arr=[10,20,30,5,6,8];
// let NewArr=Arr.slice(2,5);
// console.log(NewArr);


//  let arr =[5,10,15,20,30];
//  arr.splice(4,0,25);
//  console.log(arr);
 

// let arr=[2,4,6]
// let arr1=[8,10,12]
// let arr2=arr.concat(arr1);
// console.log(arr2);

// let res=[3,2,1];
// res.reverse();
// console.log(res);


// let  arr=['Html',"Py","Css","Js","Bootstrap","Ts"];
// arr.sort();
// console.log(arr);//

// const Ages=[1,5,48,32,85,12,45,8,20];
// let NewArr=Ages.filter(Ages=>Ages>=18);
// console.log(NewArr);


// let EvOrOdd=[10,5,6,87,6,4,0,25,89,43,678,55,9,28,92,54];
// let NewEvOrOdd=EvOrOdd.filter(EvOrOdd=>EvOrOdd%2==0);
// console.log(NewEvOrOdd);

// let arr =[1,2,5,6];
// let newArr=arr.map((el)=>el*5);
// console.log(newArr);


// let arr =[1,2,3,4,5,6,7,8,9,10];
// let newArr=arr.map((el)=>el*5);
// console.log(newArr);

// let arr =[1,2,5,6];
// let newArr=arr.map((el)=>el+5);
// console.log(newArr);


// const prices = [10, 2, 700];
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);


// let arr=[2,10,700];
// let result=0;
// for(let n=0;n<arr.length;n++){
//     result=result+arr[n];
// }
// console.log(result);

// function Message() {
//     console.log("Swapnil");
    
// }

// Message();

// function Message1(message) {
//     console.log(message);
    
// }

// Message1("swapnil...")


// function call() {
//     console.log("Hello!");
    
// }

// function call1(message) {
//     console.log("Hello!",message );
    
// }

// call();
// call1("Swapnil");


// function age(age:number){
//     if(age >= 18){
//         console.log("you are eligible for voting");
//     }else{
//         console.log("you are eligible not for voting");
//     }
// }

// age((19));


// function evenorodd(x:number){
//     if(x%2==0){
//         console.log(x + " This Is A Even Number...");
//     }else{
//         console.log(x + " This Is A Odd Number...");
//     }
// }


// evenorodd((10));


// function addtion(x,y){
//     console.log("Addtion Number = " +  (x+y));
// }


// addtion(4,5);

// function test(arr:number[]){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i] +  " This Is A Even Number... ");
//         }else{
//              console.log(arr[i] +  " This Is A Odd Number... ");
//         }
//     }
// }


// test([10,15,26,7]);


// function five(){
//     for(let x=1;x<=5;x++){
//         console.log("swapnil");
//     }
// }


// five();




// function five1(message:string){
//     for(let x=0;x<message.length;x++){
//         console.log(message[x]);
//     }
// }


// five1("swapnil")


// function login(UserName,Password) {
//     console.log("UserName =",UserName + " Password =",Password);
    
// }

// login("swapnil",7123)


// let x=10;

// function f1(){
//     console.log(x);
    
// }

// function f2(){
//     console.log(x);
    
// }


// f1();
// f2();
// console.log(x);

// let x=10;

// function f1(){
//    let  x=25;
//     console.log(x);
    
// }

// function f2(){
//    let  x=15;
//     console.log(x);
    
// }


// f1();
// f2();
// console.log(x);


// let x=10;

// function f1(){
//    let  x=25;
//     console.log(x);
    
// }

// function f2(){
//       x=15;
//     console.log(x);
    
// }


// f1();
// f2();
// console.log(x);


// var num: number[] = [10, 5, 20, 25, 15, 35, 30, 50, 45, 40];
// var num2 = num.sort(function (a, b) {
// if (a > b) return 1;
// if (a < b) return -1;
// else return 0;
// });
// console.log(num2)

// let college=["swapnil","shankar","vishal"];
// console.log(college.join(" , ")); //"swapnil , shankar , vishal"
// console.log(college)


// All String methods example




// let str = "swapnil";
// console.log(str.length);//7


// let str2 = "swapnil";
// console.log(str2.toUpperCase());//"SWAPNIL"


// let str3 = "SWAPNIL";
// console.log(str3.toLowerCase());//swapnil


// var abc = ["swapnil", "shankar", "vishal"];
// var uc = abc.map(abc => abc.toUpperCase());
// console.log(uc);//["SWAPNIL", "SHANKAR", "VISHAL"]


// var a = ["SWAPNIL", "SHANKAR", "VISHAL"];
// var lc = a.map(a => a.toLowerCase());
// console.log(lc);//["swapnil", "shankar", "vishal"]




// var student = [
//     {
//         first: "swapnil",
//         last: "sutkar",
//         age: 21
//     },
//     {
//         first: "shankar",
//         last: "shinde",
//         age: 22
//     },
//     {
//         first: "vishal",
//         last: "sutkar",
//         age: 23
//     },
// ];
// student.forEach(s => {
//     console.log(`${s.first.toUpperCase()} ${s.last.toUpperCase()}`);
// })
// //SWAPNIL SUTKAR
// // SHANKAR SHINDE
// // VISHAL SUTKAR


// var student1 = [
//     {
//         first: "SWAPNIL",
//         last: "SUTKAR",
//         age: 21
//     },
//     {
//         first: "SHANKAR",
//         last: "SHINDE",
//         age: 22
//     },
//     {
//         first: "VISHAL",
//         last: "SUTKAR",
//         age: 23
//     },
// ];
// student1.forEach(s => {
//     console.log(`${s.first.toLowerCase()} ${s.last.toLowerCase()}`);
// })
// // swapnil sutkar
// // shankar shinde
// // vishal sutkar


// let str="Swapnil";
// console.log(str.charAt(0));//S
// console.log(str.charAt(3));
// console.log(str.charAt(5));
// console.log(str.charAt(6));
// console.log(str.charAt(2));


// let str="Swapnil";
// console.log(str.indexOf("S")); //0
// console.log(str.indexOf("p"));//3
// console.log(str.indexOf("n"));//4
// console.log(str.indexOf("i"));//5




// let str="Swapnil Sutkar";
// console.log(str.lastIndexOf("r"));//13
// console.log(str.lastIndexOf("a"));//12


// let str="Sutkar is Back...";
// console.log(str.includes("swapnil"));//false
// console.log(str.includes("Sutkar"));//true
//console.log(str.includes("sutkar"));//false


// let str="Swap nil";
// console.log(str.startsWith("nil"));//false
// console.log(str.startsWith("Swap"));//true
// console.log(str.startsWith("swap"));//false


// let str="Swap nil";
// console.log(str.endsWith("nil"));//true
// console.log(str.endsWith("Swap"));//false
// console.log(str.endsWith("Nill"));//false


//  let str = "TypeScript";
// console.log(str.substring(0, 4)); // "Type"
// console.log(str.substring(4, 10)); // "Script"


// let str= "SwapnilSutkar";
// console.log(str.substring(0, 7)); // swapnil
// console.log(str.substring(7, 13)); // sutkar


// let str= "TypeScript";
// console.log(str.slice(0, 4)); // "Type"
// console.log(str.slice(-6)); // "Script"


// let str = "SwapnilSutkar";
// console.log(str.slice(0, 4)); // swap
// console.log(str.slice(-7)); // lsutkar


// let str = "SwapnilSutkar";
// console.log(str.slice(0, 7)); // swapnil
// console.log(str.slice(-6)); // sutkar




// let str= "I love JavaScript";
// let newArr=str.replace("JavaScript", "TypeScript");
// console.log(newArr);//I love TypeScript


// let str="Swapnil Is Back...";
// let newArr=str.replace("Swapnil","Sutkar");
// console.log(newArr);
// //Sutkar Is Back...


// let str="      Swapnil Sutkar    ";
// console.log(str);// "    Swapnil Sutkar   "
// console.log(str.trim());//Swapnil Sutkar


// let str="  Swapnil    "
// console.log(str.trimEnd());//  "   Swapnil"
// console.log(str.trimStart());//"Swapnil   "


// let str="swapnil,vishal,shankar";
// let newArr=str.split(",");
// console.log(newArr);
// //[ 'swapnil', 'vishal', 'shankar' ]


// let str = "Swapnil,Sutkar";
// let arr = str.split(",");
// console.log(arr); // ["Swapnil", "Sutkar"]


// let a = "Hello";
// let b = "World";
// console.log(a.concat(" ", b)); // "Hello World"


// let a = "Hello";
// let b = "Swapnil";
// console.log(a.concat(" ", b)); // "Hello Swapnil"


// let str="Hi Swapnil";
// console.log(str.repeat(5));//Hi SwapnilHi SwapnilHi SwapnilHi SwapnilHi Swapnil


// let str = "5";
// console.log(str.padStart(3, "0")); // "005"
// console.log(str.padEnd(3, "0")); // "500"


// let str= "712";
// console.log(str.padStart(7, "swapnil")); // "swap712"
// console.log(str.padEnd(7, "swapnil")); //"712swap"


// let str = "712";
// console.log(str.padStart(10, "swapnil"));//"swapnil712"



//12/4/26

// // console.log("swapnil");
// class :
// -is template or structure to create objects.
// -is nothing but collection of variables or methods which are used to perform particular
// functionality.


// Object :
// - is nothing but an instance of class.
// - if you want to access variables and methods related to particular class then we must
// create an object for that class.

// "this" keyword
// - always reference to the current object.
// - declared variables or methods if we want to access in another method of same class
// then we need to use this keyword.





// class Message{
//     Message="swapnil sutkar";


//     display(){
//         console.log("Display The Message...");


//     }
// }


// let MyMessage=new Message();
// MyMessage.display();

// class Car{
//     constructor(brand, model,color) {
//         this.brand = brand;
//         this.model = model;
//         this.color=color;
//     }

//     displayInfo() {
//         console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}`);
//     }
// }

// const myCar = new Car("Toyota", "Corolla", "Blue");
// myCar.displayInfo();


// class personl{
//     firstName='';
//     lastBname='';
//     age=0;

//     setpersonal(fn,ln,age){
//         this.firstName=fn;
//         this.lastBname=ln;
//         this.age=age;
//     }

//     displaypersonal(){
//         console.log(`first name: ${this.firstName}, last name: ${this.lastBname}, age: ${this.age}`);
//     }
// }



// const Myperson = new personl();
// Myperson.setpersonal("swapnil","sutkar",21);
// Myperson.displaypersonal();


// class Student{
//     constructor(name,age,grade){
//         this.name=name;
//         this.age=age;
//         this.grade=grade;
//     }

//     displayStudentInfo(){
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
//     }


// }

// const student1 = new Student("Swapnil", 20, "A");
// student1.displayStudentInfo();


// class Employee{

//     constructor(Emp_name,Emp_position,Emp_salary){
//         this.name=Emp_name;
//         this.position=Emp_position;
//         this.salary=Emp_salary;
//     }

//     SaveEmployeeInfo(){
//         console.log(`Employee Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`);
//     }

// }

// const employee1 = new Employee("Swapnil", "Software Engineer", 50000);
// employee1.SaveEmployeeInfo();


// class Employee1{
//     emp_Name=" ";
//     emp_designation=" ";
//     company_Name="TCS";


//     constructor(empName,empdesign) {
//         this.emp_Name=empName;
//         this.emp_designation=empdesign;
//     }
//     saveDetails(){
//         console.log("My Name Is " +  this.emp_Name +  " "  +  " And My Designation is "  +  this.emp_designation  +  " "  + " And Working in " + this.company_Name + " Company...");


//     }


// }




// let MyCompany=new Employee1("Swapnil Sutkar","Front End ");
// MyCompany.saveDetails();


// class Student {


//     std_RollNo = 0;
//     std_Name = " ";
//     std_EmailId = " ";
//     std_MobileNo = 0;


//     constructor(RollNo, Name, Email, Mobile) {
//         this.std_RollNo = RollNo;
//         this.std_Name = Name;
//         this.std_EmailId = Email;
//         this.std_MobileNo = Mobile;
//     }


//     Class(){
//         console.log(`RollNo : ${this.std_RollNo} Name : ${this.std_Name} EmailId : ${this.std_EmailId} MobileNo : ${this.std_MobileNo} OK...`);


//     }
// }


// let MyClasses =new Student(1,"Swapnil","swapnil712@gamil.com",9359071566);
// MyClasses.Class();


// class Student {


//     std_RollNo = 0;
//     std_Name = " ";
//     std_EmailId = " ";
//     std_MobileNo = 0;
//     std_Dept=" ";
//     std_Gender=" ";




//with constructor
//     constructor(RollNo, Name, Email, Mobile,Dept,Gender) {
//         this.std_RollNo = RollNo;
//         this.std_Name = Name;
//         this.std_EmailId = Email;
//         this.std_MobileNo = Mobile;
//         this.std_Dept=Dept;
//         this.std_Gender=Gender;
//     }


//     Class(){
//         console.log(`RollNo : ${this.std_RollNo} Name : ${this.std_Name} EmailId : ${this.std_EmailId} MobileNo : ${this.std_MobileNo} Department : ${this.std_Dept} Gender : ${this.std_Gender} ... InFormation...Ok`);


//     }
// }


// let MyClasses =new Student(1,"Swapnil","swapnil712@gamil.com",9359071566,"Computer Science","male");
// MyClasses.Class();





// Encapsulation - Hide implementation details and expose only necessary parts.

// class personal{
//     #name;

//     constructor(name) {
//         this.#name = name;
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(newName) {
//         this.#name = newName;
//     }
// }

// const person1 = new personal("Swapnil");
// console.log(person1.getName()); // Output: Swapnil

// person1.setName("vishal");
// console.log(person1.getName()); // Output: vishal


// class Student1{
//     #Rollno;
//     #Name;
//     #Marks;
// constructor(Rollno, Name, Marks) {
//     this.#Rollno = Rollno;
//     this.#Name = Name;
//     this.#Marks = Marks;
// }


// getStudent(){
//     return  `Roll No: ${this.#Rollno}, Name: ${this.#Name}, Marks: ${this.#Marks}`;
// }

// setStudent(Rollno, Name, Marks){
//     this.#Rollno = Rollno;  
//     this.#Name = Name;
//     this.#Marks = Marks;

// }

// }

// let student2 = new Student1(101, "Swapnil", 85);
// console.log(student2.getStudent()); // Output: Roll No: 101, Name: Swapnil, Marks: 85

// student2.setStudent(102, "Vishal", 90);
// console.log(student2.getStudent()); // Output: Roll No: 102, Name: Vishal, Marks: 90



// function BankAccount(balance) {

//   let accountBalance = balance; // private variable

//   return {
//     deposit: function(amount) {
//       accountBalance += amount;
//       console.log("Balance:", accountBalance);
//     },

//     withdraw: function(amount) {
//       accountBalance -= amount;
//       console.log("Balance:", accountBalance);
//     }
//   };
// }

// const account = BankAccount(1000);

// account.deposit(500);   // Balance: 1500
// account.withdraw(200);  // Balance: 1300


// function BackAccount(balance) {
//     let accountBalance = balance; // private variable

//     return{
//         deposit(amount){
//             accountBalance += amount;
//             console.log("Balance:", accountBalance);
//         },

//         withdraw(amount){
//             accountBalance -= amount;
//             console.log("Balance:", accountBalance);
//         }

//     };

// }


// const account = BackAccount(1000);
// account.deposit(500);   // Balance: 1500
// account.withdraw(200);  // Balance: 1300



// class BankAccount{
//     #balance=0;


//     deposit(amount){
//         this.#balance += amount;
//     }


//     getBalance(){
//         return this.#balance;
//     }
// }


// let Account=new BankAccount();
// Account.deposit(100);
// console.log(Account.getBalance());//100



// function SBIBANK(Balance) {

//     let SBIBANK = Balance;

//     return {
//         deposit(amount) {
//             SBIBANK += amount;
//             console.log("Balance", SBIBANK);

//         },

//         withdraw(amount) {
//             SBIBANK -= amount;
//             console.log("Balance", SBIBANK);
//         }

//     }


// }


// let MyBank=SBIBANK(0);
// MyBank.deposit(1000); // Balance: 1000
// MyBank.withdraw(288); // Balance: 712




// Inheritance:
// -----------
// Inheritance is nothing but an inherit the properties and methods from some other class
// without rewriting code again we can inherit the properties or methods from one class to another class.
// -we need to use "extends" keyword to inherit the functionality
// from one class to another class.
// from which class we are inheriting the properties or method that class is called Parent class.
// to which class we are inheriting the properties are called child class.
// -the main advantages of Inheritance is code reusability

// Rule:
// -we can access all the parent class methods and variables through child class
// but we cannot access child class related variables and methods through parent class.
// -Any class can extends only one class at a time and can't extends more than one class
// Inheritance - One class can inherit properties and methods from another.




// class Test{
//     sayHello(){
//         console.log("swapnil");

//     }

// }

// class Test1 extends Test{
//     sayHello(){
//         console.log("vishal");
//     }
// }

// let MyTest=new Test();
// let MyTest1=new Test1();
// MyTest.sayHello(); 
// MyTest1.sayHello();


// super()
// -it is used to call parent class constructor from child class.
// -If parent class constructor accepts few arguments then that parameters we need to pass in super method()


// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }   

//     displayInfo(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }

// }

// class student1 extends student{
//     constructor(name,age,grade){
//         super(name,age);
//         this.grade=grade;
//     }     

//     displayInfo(){
//         super.displayInfo();
//         console.log(`Grade: ${this.grade}`);
//     }

// }

// let MyStudent=new student1("swapnil",21,"A");
// MyStudent.displayInfo();


// class Employee{
//     constructor(emp_id,emp_name) {
//         this.Emp_id=emp_id;
//         this.Emp_name=emp_name;
//     }

//     displayInfo(){
//         console.log(`Employee ID: ${this.Emp_id}, Employee Name: ${this.Emp_name}`);
//     }
// }

// class Manager extends Employee{
//     constructor(emp_id,emp_name,department) {
//         super(emp_id,emp_name);
//         this.Department=department;
//     }

//     displayInfo(){
//         super.displayInfo();
//         console.log(`Department: ${this.Department}`);
//     }
// }


// let MyManager=new Manager(101,"Swapnil","IT");
// MyManager.displayInfo();    


//1. Single Inheritance

// class Animal {
//   eat() {
//     console.log("Animal is eating");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Dog is barking");
//   }
// }

// const d1 = new Dog();

// d1.eat();   // from Animal class
// d1.bark();  // from Dog class


//2. Multilevel Inheritance


// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// class Puppy extends Dog {
//     weep() {
//         console.log("Puppy is weeping");
//     }
// }

// const p1 = new Puppy();

// p1.eat();
// p1.bark();
// p1.weep();


//3. Hierarchical Inheritance


// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log("Cat is meowing");
//     }
// }

// const d1 = new Dog();
// const c1 = new Cat();

// d1.eat();
// d1.bark();

// c1.eat();
// c1.meow();



// Polymorphism 
// --------------
// same name with different functionality is nothing but polymorphism
// two types
// 1.Method Overloading
// 2.Method overriding


// 1.Method Overloading
// -> two method are said to be overload if they have same name with different arguments.
// - typescript compiler does not support the method overloading
// - Javascript does not support the method overloading


// 2.Method Overriding
// -> Due to inheritance concept parent class method and variables are available to child class.
// but child class is not satisfied with parent class method implementation then we can re declare
// or redefine parent class method in child class it its own way.
// -method name , method argument , argument types should be same while overriding.





// class Animal {

//     sound() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks");
//     }

// }

// class Cat extends Animal {
//     sound() {
//         console.log("Cat meows");
//     }   

// }

// const a1 = new Animal();
// const d1 = new Dog();
// const c1 = new Cat();


// a1.sound(); // Output: Animal makes a sound
// d1.sound(); // Output: Dog barks
// c1.sound(); // Output: Cat meows



// class student{
//     classmate(){
//         console.log(" Hi Student...");
//     }
// }
// class Room1 extends student{
//     vishal(){
//         console.log("Hi Swapnil...");
//     }
//     shankar(){
//         console.log("Hi Swapnya...");
//     }
// }


// let Myclass=new Room1();
// Myclass.shankar();
// Myclass.vishal();


// class Calculator {
//   add(a, b, c) {
//     if (c !== undefined) {
//       return a + b + c;
//     }
//     return a + b;
//   }
// }

// const calc = new Calculator();

// console.log(calc.add(5, 10));     
// console.log(calc.add(5, 10, 15)); 


// class Shape {
//   draw() {
//     console.log("Drawing a shape");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing a rectangle");
//   }
// }

// const shapes = [new Shape(), new Circle(), new Rectangle()];

// shapes.forEach(shape => shape.draw());


// class Addition {
//     action(x, y) {
//         return x + y;
//     }
// }

// class Multiple extends Addition {
//     action(x, y) {
//         return x * y;
//     }
// }

// class Sub extends Addition {
//     action(x, y) {
//         return x - y;
//     }
// }

// let a = new Addition();
// let m = new Multiple();
// let s = new Sub();

// console.log("Addition:", a.action(10, 5));
// console.log("Multiplication:", m.action(10, 5));
// console.log("Subtraction:", s.action(10, 5));

// method two calling

// const operations = [new Addition(), new Multiple(), new Sub()];

// operations.forEach(op => {
//     console.log(op.action(10,5));
// });



//abstraction

// -abstract class contains some predefined logic and properties which we can customize according to our requirements.
// -abstraction is nothing but hide internal implementation and show just set of service/functionality.
// by using abstract class we can implements abstraction.
// -we cannot create the object for the abstract class as abstract class contains incomplete methods.
// -if a class contains any abstract methods i.e incomelete method and we are not responsible
// to provide implementation for this
// methods then we need to mark this class as abstract.
// -if we want to access methods and variables related to abstract class we need to implement inheritance concept.


// class vehicle {
//     start() {
//          throw new Error("Method 'start()' must be implemented");
//     }
// }

// class Car extends vehicle {
//     start() {
//         console.log("Car starts with a key");
//     }

// }


// let MyCar=new Car();
// MyCar.start();



// class Shape {
//   draw() {
//     throw new Error("draw() method must be implemented");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing Circle");
//   }
// }

// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing Rectangle");
//   }
// }

// const s1 = new Circle();
// const s2 = new Rectangle();

// s1.draw();
// s2.draw();



// class Payment {
//   pay() {
//     throw new Error("Payment method must be implemented");
//   }
// }

// class CreditCard extends Payment {
//   pay() {
//     console.log("Payment done using Credit Card");
//   }
// }

// class UPI extends Payment {
//   pay() {
//     console.log("Payment done using UPI");
//   }
// }

// const p1 = new CreditCard();
// const p2 = new UPI();

// p1.pay();
// p2.pay();


//1.Rest Parameters
// Syntax
// three dots(...)
// - we use rest parameters to handle function parameters.


// function showNames(...names) {
//   console.log(names);
// }

// showNames("Swapnil", "Vishal", "Rahul");

// function sum(...numbers) {
//   let total = 0;

//   for (let num of numbers) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(10, 20));
// console.log(sum(10, 20, 30, 40));

// let price= [10, 2, 700];
// let total=price.reduce((sum,price)=>sum +price,0);
// console.log(total);//712




// let arr= [10, 2, 700];
// let result=0;


// for(let n=0;n<arr.length;n++){
//     result=result+arr[n];
// }
// console.log(result);//712



// function add(...num) {
//   return num[0] + num[1];
// }

// console.log(add(5, 10));

// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(10, 20, 30);





// 2.Spread operator:
// Syntax
// three dots (...)
// -is used to spread or unpack or unzip an array or object elements.


// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);


// let a = [1, 2];
// let b = [3, 4];

// let result = [...a, ...b];

// console.log(result);


// function add(x, y, z) {
//   return x + y + z;
// }

// let nums = [10, 20, 30];

// console.log(add(...nums));



// let arr1 = [1, 2, 3];

// let arr2 = [...arr1];

// console.log(arr2);



// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];

// console.log(c);



// const uniqueNums = new Set([1, 2, 3, 3, 4, 4, 5,5,4,8]);
// console.log(uniqueNums);//{ 1, 2, 3, 4, 5, 8 }


// IMP Ex

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log(nestedArray.flat(2));//[ 1, 2, 3, 4, 5, 6 ]

// let Array=[1,2,[5,6],[5,4,8,[8,9]]];
// console.log(Array.flat(2));


// var arr = [2, 3, [5, 5, [4, 1], 1]];
// console.log(arr.flat(2)); //[2, 3, 5, 5,4, 1, 1]



// Asynchronous JavaScript refers to the ability of JavaScript to perform tasks without blocking the execution of other code.
// This feature is crucial for improving the performance and responsiveness of applications, especially when dealing with tasks like fetching data from a server, reading files, or executing timers.



//Sync


// console.log(" Sync : 1) Hi...Swapnil");
// console.log(" Sync : 2)  Ye..! Swap...nya");
// console.log(" Sync : 3) Chotya...");


//Async


// console.log(" ASync : 1) Hi...Swapnil");
// setTimeout(()=>{
//     console.log(" ASync : 2)  Ye..! Swap...nya");
// },5000);//5000ms = 5s
// console.log(" ASync : 3) Chotya...");


// console.log("Welcome To");
// setTimeout(()=>{
//     console.log("Swapnil !"); 
// },2500)
// console.log();


// Callbacks
// A callback is a function passed into another function as an argument.
// Oldest method of handling asynchronous operations
// Can lead to "callback hell" with nested operations
// Limited error handling


// function Add(x,y,callback) {
//     console.log(x+y);
//     callback();

// }

// function sayHello() {
//     console.log("Hi Swapnil...");

// }


// Add(700,12,sayHello);



// function add(x,y,callback) {
//     console.log(x + y);
//     callback();


// }
// function sayHello() {
//     console.log("Hi Swapnil...");


// }

// add(10,2,sayHello);


// function finalAmount(totalAmount, discount, callBack) {
//     var finalAmount = totalAmount - discount;
//     console.log(finalAmount);
//     callBack();
// }
// finalAmount(1000, 288, function () {
//     console.log("Order Placed successfully");
// });

// function getAllProducts(callBack) {
//     //get data from backend server which is taking 2 sec.
//     callBack([{ productName: "Mobile", active: false }, { productName: "Laptop", active: true }])
// }
// getAllProducts(function (products) {
//     var filteredProducts = products.filter((el) => el.active);
//     console.log(filteredProducts);
// });


// //false =false=[];
// //true=true={ getData}
// //[ { productName: 'Laptop', active: true } ]



// function CallData(userId, callback) {
//     setTimeout(() => {
//         if (userId) {
//             const user = {
//                 Id: userId,
//                 Name: "Swapnil Sutkar",
//                 EmailId: "swap@712gmail.com"
//             };
//             callback(null, user)
//         } else {
//             callback(new Error('Invalid User ID'));
//         }
//     }, 2500);
// }

// CallData(1, (error, user) => {
//     if(error) {
//         console.log('Error fetching user: ', error);
//     } else {
//         console.log('user: ', user);
//     }
// });


// CallData(2, (error, user) => {
//     if(error) {
//         console.log('Error fetching user: ', error);
//     } else {
//         console.log('user: ', user);
//     }
// });


// Calling Method two

// CallData(1,(error,user)=>{
//     console.log('User: ',user);

// })


// Promise:
//An object representing the eventual completion or failure of an asynchronous operation.
// * Introduced to solve callback limitations
// * Provides cleaner chaining of asynchronous operations
// * Has three states: pending, fulfilled, rejected
// * Allows .then() and .catch() for handling results and errors


// function Mypromise(userId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(userId){
//                 let user={
//                     id: userId,
//                     name: "Swapnil Sutkar",
//                     emailId: "swap.712@gmail.com"
//                 }
//                 resolve(user);
//             }else{
//         reject (new Error("Invalid User ID"));
//             }
//         },2500);
//     })
// }


// Mypromise(1)
// .then((Result)=>{
//     console.log("Result : ", Result);
// })
// .catch((error)=>{
// console.log("Error : ",error);
// })
// .finally(()=>{
//      console.log("task finished...");
// })

// async/await
// async and await make handling promises easier and provide a synchronous-looking syntax.
// * Syntactic sugar over Promises
// * Makes asynchronous code look and behave more like synchronous code
// * Uses try/catch for error handling
// * Allows sequential async operations with clean syntax



// function Mypromise(userId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId) {
//                 let user = {
//                     id: userId,
//                     name: "Swapnil Sutkar",
//                     emailId: "swap.712@gmail.com"
//                 }
//                 resolve(user);
//             } else {
//                 reject(new Error("Invalid User ID"));
//             }
//         }, 2500);
//     })
// }


// async function asyncTaskOperation() {
//     try {
//         const Result = await Mypromise(1);
//         console.log(Result);

//         const Result1 = await Mypromise(2);
//         console.log(Result1);

//         const Result2 = await Mypromise(3);
//         console.log(Result2);

//     } catch (error) {
//         console.log(error);
//         throw new Error('error fetching user');
//     }
// }

// asyncTaskOperation();


//call Method 1
// asyncTaskOperation();


//call Method 2


// asyncTaskOperation()
//   .then((result) => {
//     console.log('result: ', result);
//   })
//   .catch((e) => {
//     console.log('error: ', e);
//   });




// class BankAccount {
//     constructor(initialBalance = 0) {
//         this.balance = initialBalance;
//     }


//     deposit(amount) {
//         if (amount <= 0) {
//             console.log('Deposit amount must be greater than zero');
//             return;
//         }
//         this.balance += amount;
//         console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
//     }


//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log('Withdrawal amount must be greater than zero');
//             return;
//         }


//         if (amount > this.balance) {
//             console.log('Insufficient funds for withdrawal');
//             return;
//         }


//         this.balance -= amount;
//         console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
//     }


//     displayBalance() {
//         console.log(`Current Balance: ${this.balance}`);
//     }
// }


// // usage
// const myAccount = new BankAccount(100);


// // Initial balance
// setTimeout(() => {
//     myAccount.displayBalance();
// }, 500);


// // Deposit after 1 second
// setTimeout(() => {
//     myAccount.deposit(50);
// }, 1000);


// // Withdraw after 2 seconds
// setTimeout(() => {
//     myAccount.withdraw(30);
// }, 2000);


// // Invalid withdrawal after 3 seconds
// setTimeout(() => {
//     myAccount.withdraw(200);
// }, 3000);


// // Invalid deposit after 4 seconds
// setTimeout(() => {
//     myAccount.deposit(-1);
// }, 4000);


// // Final balance after 5 seconds
// setTimeout(() => {
//     myAccount.displayBalance();
// }, 5000);

