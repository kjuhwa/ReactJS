// ES6 모던 자바스크립트
// 객체,배열에 대한 추가기능
// 구조 분해, 객체 리터럴 개선, 스프레드 연산 ...
// ====================================================
var food = {
    bread: '크로와상',
    meat: '소고기',
    cheese: '체다치즈',
    rices: ['돈까스덮밥','불고기덮밥','김치볶음밥']
}
// 기존에는 객체.멤버로 접근하여 데이터를 사용
console.log(food.cheese, food.rices[1]);

// 변수로 받아서 사용하고 싶다
// 원본은 그대로 두고 사본을만들어서 구조분해 처리된다.
var {meat, cheese} = food
meat = '돼지고기'
console.log(meat, cheese, food);

// ===========================================
// 구조 분해 응용 => 함수 인자로 사용
var foodFighter = foodParam => {
    // 내가 필요한 부분을 찾아서 사용해야 했다
    console.log(`내가 좋아하는 고기는 ${foodParam.meat}`);
}
foodFighter(food)

var foodFighter2 = ({meat}) => {
    console.log(`내가 좋아하는 고기는 ${meat}`);
}
foodFighter2(food)

// =============================================
// 배열 구조 분해
console.log(food.rices);
var [a] = food.rices
// 돈가스 덮밥
console.log(a);
// 김치볶음밥 (배열 구성원이 많을 경우 일일 ,,,, 치는것은 비효율적임)
var [,,c] = food.rices
console.log(c);

// =============================================
// 객체 리터럴 개선
var name = 'hi'
var level = 10
var check = ()=>{
    console.log(`${name} 의 점수는 ${level}`);
    
}
check()

var newObj = {
    // 전역 변수, 함수들을 그대로 리터럴의 멤버로 구성
    name,
    level,
    check,
    // 객체 리터럴 내에 함수 정의
    check2(){

    }
}
console.log(newObj);
// ==============================================================================
// 스프레드 연산자
var tools = ['수저','포크']
// 2개 배열 합치기
var rice_tool = [...food.rices,...tools]
console.log(rice_tool);
console.log(rice_tool.join(','));

// 원본을 훼손하는 문제
var [lastFood] = food.rices.reverse();
console.log(lastFood);
console.log(food.rices);
// 원복
food.rices.reverse()

// 원본 -> 사본 -> 조작 -> 분해 -> 김치볶음밥 출력
var [lastFood2] = [...food.rices].reverse()
console.log(lastFood2);
console.log(food.rices);

// 배열 구조분해와 스프레드 연산을 활용
var [first, ... others] = food.rices;
console.log(first, others);

// 함수의 인자로 스프레드 연산자 사용
function mix(...args){
    var [s,...remain] = args;
    var [f,...ends] = remain.reverse();
    console.log(s,f,remain,ends);
    
}
mix('A','B','C')