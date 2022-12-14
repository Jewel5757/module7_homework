//Задание 1 .Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
//все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const person = {
    name: 'tanya',
}

const student = Object.create(person);
student.ownCity ='Moscow';
student.surname = 'ivanowa';


console.log(student);

function keyProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log((key) + ' : ' + obj[key])
        }
    }
};

keyProp(student) 



//Задание 2. Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
//переданного объекта свойство с данным именем. Функция должна возвращать true или false.
 

const str = 'string';
const obj = {
    name: 'tanya',
    city: 'Moscow',
    string: 'stringify'
}
let flag = 'false'

function findSameString(str,obj){
    for (let key in obj) {
        if (key == str) {
            flag = 'true'
            break
        } 
    }
    console.log(flag)
}

findSameString(str,obj) 


//Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.

function newObj(){
    let newObject = Object.create(null);
    console.log(newObject)
}

newObj()

newObj() 

//Задание 4
//Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создайте экземпляры каждого прибора.
//Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


function Device(name) {
this.name = name,
this.klass ='electric',
this.country = 'China'
}

Device.prototype.turnOn = function(name){
    console.log(`${name} is working :)`)
}

Device.prototype.turnOff = function(name){
    console.log(`${name} is not working :(`)
}



function Lamps(manufacturer,color) {
    this.manufacturer = manufacturer;
    this.color = color
}
function Friges(capacity,size){
    this.capacity = capacity;
    this.size = size
}

Lamps.prototype = new Device('DEVICES');
Friges.prototype = new Device('DEVICES');

Lamps.prototype.shine = function(){
    console.log(`shine like a diamond`)
}


const samsung = new Lamps('samsung','yellow');
const toshiba = new Friges('120 beer bottles', 'little');

console.log(samsung); 
console.log(toshiba); 
samsung.turnOn('samsung');
toshiba.turnOff('xiaomi');
samsung.shine()


//Задание 5
//Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создайте экземпляры каждого прибора.
//Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

class Device1{
    constructor() {
    console.log('psss, guy, do u need some devices?')
    this.class = 'electric';
    this.country = 'China';
    this.turnOn = function(){
        console.log(`Device is working :)`)}
    this.turnOff = function(){
        console.log(`Device is not working :(`)
    }
    }
}

class Lamp extends Device1{
            constructor(color,temperature) {
                super(name);
                this.color = color;
                this.temperature = temperature;
            }
            getSale(sale){
                console.log(`Your sale is ${sale} % `);
            } 
        }


class Frige extends Device1{
    constructor(manufacturer,capacity) {
        super(name);
        this.manufacturer = manufacturer;
        this.capacity = capacity;
    }
    getPresent(present){
        console.log(`Your present is ${present} ! `);
    } 
}

let Bra = new Lamp('blue','1300 K');
let coolFrige = new Frige('samsung', '120 beer bottles');


console.log(Bra);
Bra.turnOn()
Bra.getSale(10)

console.log(coolFrige);
coolFrige.turnOff()
coolFrige.getPresent('pizza')

