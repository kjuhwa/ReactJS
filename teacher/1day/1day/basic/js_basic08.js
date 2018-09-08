// ES6 모던 자바스크립트
// 클레스 (prototype를 통한 확장 방식을 편리하게 구성)
class Food
{
    // 생성자 
    constructor(name, age)
    {
        // 맴버변수는 이렇게 최초 등장해도 됨(선언없이)
        this.name = name    
        this.age  = age
    }
    // 맴버변수        
    // 맴버함수
    info () {
        console.log(`${this.name} : ${this.age}`)
    }
}
const obj = new Food('nica', 100)
obj.info()

// 부모것을 그대로 가져다 쓰거나, 재정의 할수 있거나, 자신이 추가
class Food2 extends Food
{
    constructor (name, age, natinal='korea'){
        super(name, age)
        this.natinal = natinal
    }
    info () {
        // 자유롭게
        //super.info()
        console.log(`${this.name} : ${this.age} : ${this.natinal}`)
    }
}
const obj2 = new Food2('k',1004)
obj2.info()
const obj3 = new Food2('k',1004,'korea2')
obj3.info()