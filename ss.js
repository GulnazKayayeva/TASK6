console.log('ПЕРВОЕ ЗАДАНИЕ');

let car = [car1 = 3000 , car2 = 8000, car3 = 4500 , car4 = 30000, car5 = 6500, car6 = 23000 ]

let cheap = [car.filter(item => item <= 7000)]

console.log(cheap);

console.log('ВТОРОЕ ЗАДАНИЕ');

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let num = []
let strings =[]
let bool = []
let obj = []



arr.filter(item => {
    if(typeof(item) === 'number'){
        num.push(item)
    } else if (typeof(item) === 'string'){
        strings.push(item)
    } else if (typeof(item) === 'boolean'){
        bool.push(item)
    } else if (typeof(item) === 'object'){
        obj.push(item)
    }
})

console.log(num);
console.log(strings);
console.log(bool);
console.log(obj);

console.log('ТРЕТЬЕ ЗАДАНИЕ');

if(num.length >= 5 ){
    console.log('good');
} else {
    console.log('bad');
}




console.log('ЧЕТВЕРТОЕ ЗАДАНИЕ');

let names = ['Aleksey','Kartoshka','Margarita','Morgenshtern','Monica']

let c = +prompt('Введите число')

names.splice(c,c)

console.log(names);


console.log('ПЯТОЕ ЗАДАНИЕ');


console.log(num);
console.log(strings);
console.log(bool);
console.log(obj);

