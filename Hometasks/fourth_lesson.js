//first task
console.log('first task:');

function sep(num) {
    var number = {
        ones: 0,
        tens: 0,
        hundreds: 0
    };
    if (num < 100 || num > 999) {
        return ('Ваше число не трёхзначное!');
    }
    else {
        number.ones = num % 10;
        number.tens = Math.floor((num % 100) / 10);
        number.hundreds = Math.floor(num / 100);
        return number;
    }
}

var num = prompt('Введите трёхначное число: ');
if (!isNaN(num)) {
    console.log(sep(num));
}
else console.log('Вы ввели не число!');

//second_task
console.log(' ');
console.log('second task:');

function basketSum() {
    var t = 0;
    var sum = 0;
    while (t < basket.length) {
        sum += basket[t].amount * basket[t].getPrice();
        t++;
    }
    return sum;
}

var basket = [
    {
        name: 'Hoodies',
        price: 3000,
        amount: 3,
        discount: 10,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'T-shirts',
        price: 1500,
        amount: 1,
        discount: 25,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'Jeans',
        price: 2500,
        amount: 2,
        discount: 20,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'Shoes',
        price: 4000,
        amount: 3,
        discount: 5,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'Underwear',
        price: 1000,
        amount: 5,
        discount: 30,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    }
];

console.log('Basket price:   ' + basketSum());