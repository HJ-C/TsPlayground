// interface 활용

type Score = 'A' | 'B'

interface User{
    name : string
    age : number,
    gender? : string,
    readonly birthYear : number,
    // [grade:number] : string
    [grade:number] : Score
}

let user : User = {
    name : '현준',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B'
}

user.age = 10
user.gender = 'male'
// user.birthYear = 1990;

console.log(user.age)

// user객체에 gender속성이 없지만 interface의 User에 gender?속성을 통해 출력가능
// readonly는 읽기전용이라 user.birthYear로 값을 변경하려면 오류발생
// [key : type] : type 형태를 통해 1? : string , 2? : string 처럼 하드코딩할 필요 없다
// type을 지정해서 범위를 축소 시킬 수 있음


// interface 함수 활용

interface Add{
    (num1 : number, num2 : number) : number
}

const add : Add = function(x,y){
    return x+y
}
add(10,20) //30

interface IsAdult{
    (age:number):boolean
}
const a :IsAdult = (age)=> {
    return age > 19
}
a(33) //true


// interface Class활용 (implements)

interface Car {
    color : string;
    wheels : number;
    start() : void;
}

// (1) implements
class Bmw implements Car{
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c
    }

    start(){
        console.log('Go')
    }
}
const b = new Bmw('green')
console.log(b)
b.start()

// (2) extneds

interface Benz extends Car{
    door:number;
    stop() : void
}
const benz : Benz = {
    door : 5,
    stop(){
        console.log('stop')
    },
    color : 'black',
    wheels : 5,
    start(){}
}

// (3) 확장

interface Car{
    color : string;
    wheels : number;
    start() : void;
}
interface Toy{
    name : string;
}

interface ToyCar extends Car,Toy{
    price : number;
}

// implements는 부모는 선언만 하며, 반드시 자식이 정의를 오버라이딩해서 사용
// extends는 모든선언/정의를 부모가하며 오버라이딩할 필요가 없어 메소드/변수를 그대로 사용할 수 있다
