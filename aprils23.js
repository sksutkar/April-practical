//23/4/26

let num = 145;
let res = 0;

while (num > 0) {
    let r = num % 10;
    res = res * 10 + r;
    num = Math.floor(num / 10);
}

console.log(res);
