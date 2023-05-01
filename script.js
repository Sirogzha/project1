// Задание 1

// Необходимо создать функцию myFunction, которая принимает два числовых аргумента a и b, 
// Найти сумму четных чисел и их количество в диапазоне от a(начало диапазона) до b(конец диапазона)
// Для вывода результата из функции используем console.log("ваш результат");
// Пример вызова: myFunction(3, 5);
// Пример вывода: Сумма четных чисел в диапазоне равна: 4
//                Количество четных чисел в диапазоне равно: 1

function myFunction(a,b) {
    let sum = 0;
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
            count++;
        }
    }
    console.log('Сумма четных чисел в диапазоне равна: ' + sum);
    console.log('Количество четных чисел в диапазоне равно: ' + count);
}
myFunction(3,5);

// Задание 2

// Необходимо создать функцию isPrime, которая принимает одно число num. 
// Функция определяет простое ли число (число называется простым, если оно делится только само на себя и на 1)
// Функция должна возвращать значение типа boolean(true/false);
// Пример вызова: isPrime(7);
//                isPrime(9);
// Примеры возвращаемого значения:  true;
//                                  false;

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
    }
console.log(isPrime(7));
console.log(isPrime(9));

// Задание 3

// Необходимо создать 2 функции getSqrtBySequentialSelection и getSqrtByBinarySearch каждая из которых принимают один аргумент number(число) обе функции будут находить и возвращать корень натурального числа с точностью до целого(аналогично вызову Math.sqrt(number)). 
// Соответственно результат выполнения у двух функций будет одинаковый, а реализация разная.
// getSqrtBySequentialSelection будет находить корень методом последовательного подбора;
// getSqrtByBinarySearch будет находить корень методом бинарного поиска;
// Math.sqrt в задании использовать нельзя. 
// Пример вызова:  getSqrtBySequentialSelection(4);
//                 getSqrtByBinarySearch(9);
// Примеры возвращаемого значения:  2;
//                                  3;

function getSqrtBySequentialSelection(a) {
    if (a < 1) {
        return 'Введите натуральное число, больше 0';
    }
    for (let i = 0; i <= a; i++) {
        let j = i * i;
        if (j == a) {
            return i;
        }
        if (j > a) {
            return ((i-1) + ' c остатком')
        }
    }
}
console.log(getSqrtBySequentialSelection(4));

function getSqrtByBinarySearch(b){
    if (b == 1) {
        return 1;
    }
    if (b < 1) {
        return 'Введите натуральное число, больше 0';
    }
    let min = 1;
    let max = b - 1;
    let prev = 0;
    for(;;) {
        let mid = (min + max) / 2;
        if (prev == mid) {
            return mid;
        }
        let q = mid * mid;
        if (b == q) {
            return mid;
        }
        if (b < q) {
            max = mid;
        } else { 
            min = mid;
        }
        prev = mid;
    }
};
console.log(getSqrtByBinarySearch(9));

// Задание 4

// Необходимо создать функцию getFactorial, которая принимает одно число n. 
// Функция возвращает факториал числа n.(n! = 1*2*…*n-1*n)
// Пример вызова:  getFactorial(4);
//                 getFactorial(5);
// Примеры возвращаемого значения:  24;
//                                  120;

function getFactorial(n) {
    if ( n < 1) {
        return ("Число должно быть больше 0");
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(getFactorial(4));
console.log(getFactorial(5));

// Задание 5

// Необходимо создать функцию digitSum, которая принимает одно число y. 
// Функция возвращает сумму цифр заданного числа
// Пример вызова:  digitSum(128);
//                 digitSum(1);
//                 digitSum(5659);
// Примеры возвращаемого значения:   11;
//                                   1;

function digitSum(y) {
    let str = y.toString().split('').reduce((a, b) => +a + +b);
    return str;
}
console.log(digitSum(128));
console.log(digitSum(1));
console.log(digitSum(5659));

console.log('Изменения для GIT')