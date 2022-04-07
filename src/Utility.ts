// 1. keyof
// User의 인터페이스의 key값들을 유니온으로 만들어줌 
interface User{
    id:number
    name : string
    age : number
    gender: "m" | "f"
}

type UserKey = keyof User // === "id" | "name" | 'age' | 'gender'

const uk:UserKey = "age"

// 2. Partial<T>
//프로퍼티를 옵셔널(?)로 바꿔줌(key와 value값이 없어도 할당되는 방식)
interface User{
    id:number
    name : string
    age : number
    gender: "m" | "f"
}

let admin:Partial<User> = {
    id : 1 ,
    name:'Bob'
}
//이거와 같음
// interface User{
//     id?:number
//     name? : string
//     age? : number
//     gender?: "m" | "f"
// }


// 3 .Required<T>
// Partial과 다르게 모든 프로퍼티를 필수로 바꿔 줌 

interface User{
    id : number
    name : string
    age? : number
}

let admin : Required<User> = {
    id : 1 ,
    name : 'bob',
    age : 30,
}

// 4. Readonly<T>
// 읽기전용 수정 불가
interface User{
    id : number
    name : string
    age? : number
}

let admin : User = {
    id : 1,
    name : "bob",
}
admin.id = 2// 불가

// 5. Record<K,T>
// Key와 Type

type Grade = "1" | "2" | "3" | "4"
type Score = "A" | "B" | "C" | "D"

const socre: Record<Grade, Score> ={
    1 : "A",
    2 : "B",
    3 : "C",
    4 : "D",
}


// 6. Pick <T,K>
//K 프로퍼티만 골라서 사용
interface User{
    id : number
    name : string
    age : number
    gender : "M" | "W"
}
const admin : Pick<User, "id" | "name"> = {
    id : 0,
    name : "Bob"
}

// 7. Omit<T,k>
// Pick과 반대로 제외 시킴
interface User{
    id : number
    name : string
    age : number
    gender : "M" | "W"
}

const admin: Omit<User, "age" | "gender"> ={
    id : 0,
    name: "Bob"
}

// 8. Exclude<T1,T2>
// T1에서 T2를 제외
// Omit과차이 : Omit은 프로퍼티를 제외하지만 Exclude는 타입을 제외함
type T1 = string | number
type T2 = Exclude<T1, number> // string만 남음

//9. NonNullable<Type>
// null을 제외한 타입생성, undefined도 함께 제외

type T1 = string | null | undefined | void
type T2 = NonNullable<T1> //string과 void만 남음