// 함수

function add(num1 : number, num2 : number) : void {
    return num1 + num2
}
// (파라미터:타입, 파라미터:타입) : 타입

function IsAdult(age:number) : boolean{
    return age>19
}

function hello(name:string){
    return `Hello, ${name||"world"}`
}

function hello(name:string, age?:number):string{
    if(age !== undefined){
        return `Hello, ${name}. You are ${age}`
    }else {
        return `Hello, ${name}`
    }
}
hello('sam')
// (age?:number, name:string) 처럼 파라미터의 값이 바뀌면 안됨
// 굳이 바꾸고 싶다면 (age: number | undefined, name:string)후 hello(undefined,'sam')출력

//나머지 매개변수 타입
function add(...nums : number[]){
    return nums.reduce((res,num)=> { res + num, 0})
}
add(1,2,3) //6

//결과가 불확실한 경우(오버로드)
interface User{
    name: string
    age : number
}

function join(name:string, age: string) : string
function join(name:string, age: number) : User
function join(name:string, age: number) : User | string{
    if(typeof age === 'number'){
        return {
            name,
            age
        }
    }else{
        return "나이는 숫자로 입력해주시오"
    }
}
const sam : User = join('sam', 30)
const jane : string = join('sam', "30")