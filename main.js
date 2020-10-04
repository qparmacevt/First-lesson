//console.log("HERLO");

//let firstPART = 2;
//let secondPART = 3;
//let equel = firstPART+secondPART;
//console.log(equel);

//for(let i=1; i<6; i++) {
//    let a = 7;
//}

//console.log(a);

//console.dir(window);

//console.log( typeof a);


//let a = 0.1;
//let b = 0.2;
//let c = a + b;

//let delta = c - 0.3;

//console.log(delta < Number.EPSILON);

//let name = "Vasya";
//let welcome = `hello ${name} !!`;


let bday   = 4;
let bmonth = 01;
let byear  = 1995;

let day    = 4;
let month  = 10;
let year   = 2020;

let age = year - byear;

if(month < bmonth) {
    age--;
}else if(month == bmonth && day < bday) {
    age--;
}

console.log('Age:', age);


let balance =  3000;
let sum  = 1000;

let fee = 0;
if(sum  <= balance) {
    fee = fee * 0.01;
}else if(balance <= 0) {
    fee = sum * 0.04;
}else {
    fee = (sum - balance) * 0.04 + balance  * 0.01;
}
console.log('Fee:', fee);