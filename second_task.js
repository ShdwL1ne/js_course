//first task
alert("Первое задание")

var a1 = 1, b1 = 1, c1, d1;
c1 = ++a1; alert("c1 = " + c1);           // 2, т.к. используется префиксная запись инкремента => число увеличивается до 2, а зтем выводится

d1 = b1++; alert("d1 = " + d1);           // 1, т.к. используется постфиксная запись инкремента => число сначала выводится, а затем увеличивается до 2

c1 = (2 + ++a1); alert("c1 = " + c1);      // 5, т.к. a увеличилось с 2 до 3, а затем произошло сложение (из-за префиксной формы записи)
d1 = (2 + b1++); alert("d1 = " + d1);      // 4, т.к. b сначала произошло сложение с выводом на экран и только потом b увеличилось до 3
alert("a1 = " + a1);                    // 3
alert("b1 = " + b1);                    // 3


//second task
alert("Второе задание");

var a2 = 2;
var x = 1 + (a2 *= 2);       // 5, т.к. a2 *= 2 можно переписать в виде a2 = (a2 * 2);
alert("x = " + x);


//third task
alert("Третье задание");

var a3 = parseInt(prompt("Введите число a: ")), b3 = parseInt(prompt("Введите число b: "));
if (a3 >= 0 && b3 >= 0) alert("Оба числа положительные \n Их разность: " + (a3 - b3));
else if (a3 < 0 && b3 < 0) alert("Оба числа отрицательные \n Их произведение: " + (a3 * b3));
else alert("Числа разных знаков \n Их сумма: " + (a3 + b3));

//fourth task
alert("Четвёртое задание");

var a4 = parseInt(prompt("Введите значение a в дипозоне от 0 до 15 включительно:"));
if (!isNaN(a4)) {
    switch (a4) {
        case 1:
            alert(a4++);
        case 2:
            alert(a4++);
        case 3:
            alert(a4++);
        case 4:
            alert(a4++);
        case 5:
            alert(a4++);
        case 6:
            alert(a4++);
        case 7:
            alert(a4++);
        case 8:
            alert(a4++);
        case 9:
            alert(a4++);
        case 10:
            alert(a4++);
        case 11:
            alert(a4++);
        case 12:
            alert(a4++);
        case 13:
            alert(a4++);
        case 14:
            alert(a4++);
        case 15:
            alert(a4);
            break;
    }
} else alert("Вы ввели неверное значение");

//fifth task
alert("Пятое задание");

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

var a5 = parseInt(prompt("Введите первое число:"));
var b5 = parseInt(prompt("Введите второе число:"));
if (!isNaN(a5) && !isNaN(b5)) {
    alert("Их сумма: " + sum(a5, b5));
    alert("Их разность: " + sub(a5, b5));
    alert("Их произведение: " + mul(a5, b5));
    alert("Их частное: " + div(a5, b5));
} else alert("Вы ввели неверное значение");


//sixth task
alert("Шестое задание");

function mathOperation(a6, b6, op6) {
    switch (op6) {
        case "sum":
            return sum(a6, b6);
        case "sub":
            return sub(a6, b6);
        case "mul":
            return mul(a6, b6);
        case "div":
            return div(a6, b6);
    }
}

var a6 = parseInt(prompt("Введите первое число:"));
var b6 = parseInt(prompt("Введите второе число:"));
var op6 = prompt("Введите название операции:\n1) sum\n2) sub\n3) mul\n4) div");
if (!isNaN(a6) && !isNaN(b6) && (op6 == "sum" || op6 == "sub" || op6 == "mul" || op6 == "div")) {
    if (op6 == "sum") alert("Их сумма: " + mathOperation(a6, b6, op6));
    if (op6 == "sub") alert("Их разность: " + mathOperation(a6, b6, op6));
    if (op6 == "mul") alert("Их произведение: " + mathOperation(a6, b6, op6));
    if (op6 == "div") alert("Их частное: " + mathOperation(a6, b6, op6));
} else alert("Вы ввели неверное значение");


//seventh task
alert("Седьмое задание");

alert("Значение сравнения null > 0:\n" + (null > 0));
alert("Значение сравнения null == 0:\n" + (null == 0));
alert("Значение сравнения null >= 0:\n" + (null >= 0)); //при сравнении null преобразуется в 0

//eighth task
alert("Восьмое задание");

function power(val, pow) {
    if (val == 0) return 0;
    else if (pow == 1) return 1;
    else if (pow < 0) return power(1 / val, pow * (-1));
    else return val * power(val, pow - 1);
}

var a8 = parseInt(prompt("Введите число:"));
var b8 = parseInt(prompt("Введите степень числа:"));
alert(power(a8, b8));
