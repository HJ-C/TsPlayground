"use strict";
// interface 활용
var user = {
    name: '현준',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B'
};
user.age = 10;
user.gender = 'male';
// user.birthYear = 1990;
console.log(user.age);
var add = function (x, y) {
    return x + y;
};
add(10, 20); //30
var a = function (age) {
    return age > 19;
};
a(33); //true
// (1) implements
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('Go');
    };
    return Bmw;
}());
var b = new Bmw('green');
console.log(b);
b.start();
var benz = {
    door: 5,
    stop: function () {
        console.log('stop');
    },
    color: 'black',
    wheels: 5,
    start: function () { }
};
// implements는 부모는 선언만 하며, 반드시 자식이 정의를 오버라이딩해서 사용
// extends는 모든선언/정의를 부모가하며 오버라이딩할 필요가 없어 메소드/변수를 그대로 사용할 수 있다
