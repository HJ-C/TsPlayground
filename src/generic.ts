// Generic
// 선언시 타입 파라미터만 적어주고 생성하는 시점에 타입을 결정

function getSize(arr : number[] | string[] ) : number {
    return arr.lenght
}

const arr1 = [1,2,3]
getSize(arr1) // 3

const arr2 = ['a','b','c']
getSize(arr2) // 3

const arr3 = [fasle, true, true]
getSize(arr3)

//하나씩 변수를 추가할 때 마다 귀찮게 타입을 넣거나 오버로드를 해줘야한다
// 이럴때 해결해 주는 것이 Generic

//Generic 예제1
function getSize<T>(arr:T[]) : number{
    return arr.length
}
const arr1 = [1,2,3]
getSize<number>(arr1) // 3 
getSize<number | string>(arr1) //가능 

//Generic 예제2
interface Mobile<T>{
    name :string
    price : number
    option : T //any타입 대신 제네릭
}
const m1: Mobile<object> = {
    name: "s21",
    price: 1000,
    option : {
        color:"red",
        coupon : false
    },
}

const m2 : Mobile<string> = {
    name : 's20',
    price: 900,
    option: 'good'
}

 