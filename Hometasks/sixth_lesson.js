var basket = [
    {
        name: 'Hoodie',
        price: 3000,
        discount: 10,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'T-shirt',
        price: 1500,
        discount: 25,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'Jeans',
        price: 2500,
        discount: 20,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'Shoes',
        price: 4000,
        discount: 5,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    },
    {
        name: 'Underwear',
        price: 1000,
        discount: 30,
        getPrice: function () {
            return (this.price * (1 - this.discount / 100))
        }
    }
];


function addItem(p) {
    var element = document.querySelector('.basket_information');
    var box;
    this.box = document.createElement('div');
    this.box.classList.add('items_box');
    this.box.innerHTML += basket[p].name + ":   " + basket[p].getPrice() + '₽';
    element.appendChild(this.box);
    basketSum(p);
}

var basSum = 0;

function basketSum(p) {
    basSum += basket[p].getPrice();
    document.querySelector('.basket_sum_value').innerHTML = basSum + ' ₽';
}

document.getElementById('buy_hoodie').onclick = function () {
    addItem(0);
}
document.getElementById('buy_t-shirt').onclick = function () {
    addItem(1);
}
document.getElementById('buy_jeans').onclick = function () {
    addItem(2);
}
document.getElementById('buy_shoes').onclick = function () {
    addItem(3);
}
document.getElementById('buy_underwear').onclick = function () {
    addItem(4);
}
