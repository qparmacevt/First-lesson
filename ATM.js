//1, 5, 20, 50,

let sum = prompt('Insert sum');
sum = parseInt(sum);

console.log('Сума', sum, 'грн.');

let k50 = Math.floor(sum  / 50);
//k50 = Math.floor(k50); //Math.ceil | Math.round(x*100)/100

console.log('UAH 50 X', k50, 'шт.');

sum -= (50*k50);

let k20 = Math.floor(sum  / 20);
console.log('UAH 20 X', k20, 'шт.');
sum -= (20*k20);

let k5 = Math.floor(sum  / 5);
console.log('UAH 5 X', k5, 'шт.');
sum -= (5*k5);

console.log('UAH 1 X', sum, 'шт.');

//jjj