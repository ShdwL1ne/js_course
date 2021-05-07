//first_task
console.log("first task".toUpperCase());

var range = 1000;
var simp = [2];
var num = 2;
var isSimp = true;
while (num < range) {
    var t = 2;
    num++;
    while (t < num) {
        if (num % t === 0) {
            isSimp = false;
            break;
        }
        t++;
    }
    if (isSimp) {
        simp.push(num);
    }
    isSimp = true;
}

console.log(simp);


//second_task + third_task
console.log("second & third tasks".toUpperCase());

function countBasketPrice(price, discount) {
    return price * (1 - discount / 100);
}

var NAME = 0;
var PRICE = 1;
var AMOUNT = 2;
var DISCOUNT = 3;
var basket = [['Hoodies', 'T-shirts', 'Jeans', 'Shoes', 'Underwear'], [3000, 1500, 2500, 4000, 1000], [3, 1, 2, 3, 5], [10, 25, 20, 5, 30]];

var t = -1;
while (t++ < basket.length) {
    console.log(basket[NAME][t] + ':     ' + basket[AMOUNT][t] * countBasketPrice(basket[PRICE][t], basket[DISCOUNT][t]) + ' rub');
}


//fourth_task
console.log("fourth task".toUpperCase())

for (var i = 0; i < 9; i++, console.log(i)) { }


//fifth_task
console.log("fifth task".toUpperCase())

var string = 'x';
for (var i = 0, x = 'x'; i < 20; i++) {
    console.log(string);
    string += x;
}