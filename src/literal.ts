// Literal Types

const userName1 = "bob"; //문자열 리터럴 타입
let userName2 = "tom";

userName2 = 3 //userName2는 string으로 할당되었으니 쓰려면 userName2:string | number로 변경

// 
type Job = "police" | 'developer' | 'teacher';

interface User{
    name : string;
    job : Job
}

const user: User = {
    name : "Bob",
    job : 'police'
}

// Union Types 심화(or)

interface Car{
    name : 'car'
    color : string
    start() : void
}
interface Mobile{
    name: 'mobile'
    color : string
    call(): void
}

function getGift(gift: Car | Mobile){
    gift.color // 중복된 값이라 사용 가능
    gift.start() // Car에만 포함된 값이라 사용 불가능
    if(gift.name === 'car'){
        gift.start()
    }else{
        gift.call()
    }
}

//Intersection Types(and) :교차타입

interface Car{
    name:string
    start(): void
}
interface Toy{
    name :string
    color: string
    price:number
}

const toyCar : Toy & Car = {
    name : '차',
    start() {},
    color: 'black',
    price : 2000
}