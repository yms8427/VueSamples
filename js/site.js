function divide() {
  console.log("%c------------------------------", "color: blue; font-family:serif; font-size: 20px");
}

var yas = 17;
if (yas < 18) {
  console.log("Oy veremez");
} else {
  console.log("Oy verebilir");
}
divide();
var evens = [];
var odds = [];
for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}
console.log("%cÇift Sayılar...: " + evens);
console.log("Tek Sayılar....: " + odds);
divide();

var step = 10;
while (step > 0) {
    step--;
}
console.log("While bitti");

divide();

var person = {
    name: "Can Perk",
    age: 32,
    city: "Ankara"
};
delete person.age
person.birthDate = new Date(1988, 1, 8);
console.log(person);
divide();

var matematik = {
    pi: 3.14,
    e: 2.72,
    karekok: function (number) {
        return Math.sqrt(number);
    },
    us: function (number, power) {
        return Math.pow(number, power);
    }
}
console.log(matematik);
divide();
var car = {
    model: "C-200",
    brand: "Mercedes",
    year: 2020
};
var propName = "horsePower";
if(car.hasOwnProperty(propName)) {
    console.log("Özellik tanımlı, değeri : " + car[propName]);
} else {
    console.log("Özellik tanımlı değil, tanımlanıyor");
    car[propName] = 182;
    console.log("Yeni değer : " + JSON.stringify(car));
}
divide();
Number.prototype.isEven = function () {
    return this % 2 === 0;
}

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
}

var n1 = 12;
console.log("Çıktı 1 : " + n1.isEven());
console.log("Çıktı 2 : " + n1.isOdd());
divide();
