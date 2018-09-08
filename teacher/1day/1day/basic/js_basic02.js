// 자바스크립트 문법
// 표준에서 변경된 주요 부분 =================
// 문장의 끝에 ; => 생략
// 변수키워드 추가, 띠어쓰기에 대한 권장 사항
// 클레스 형태도 일반 언어 수준으로 변경
// require의 형태(다른 js를 포함하는 방식) 변경
// 함수의 형태 => 애로우 함수 변경
// 표준확인 => standard.js 비표준=>표준으로 바꾸는 js
// ==========================================
// 변수
// var -> const, let 추가됨
// 타입 추론에 의해 값이 할당될때 변수 타입이 결정된다
// 타입 => 정수, 소수, 문자열, 블린, 함수, 객체
// 자바스크립트의 모든 구성요소를 담을수 있다
var a = 10;
// 연산자 (기존 언어와 동일), === (권장사항)
// 조건문(if), 반복문(for, while)
// 함수
// 기본형태
console.log( add(1,2) );
function add(x, y)
{
  // ....
  return x+y;
}
console.log( add(1,2) );
// 익명함수(함수의 이름이 없다)
// 변수로 받던지, 콜백함수로 1회성으로 사용하던지 
// add2가 생성되기 전에 사용해서 오류
//console.log( '->',add2(1,2) );
var add2 = function (x, y)
{
  // ....
  return x+y;
}
console.log( '=>',add2(1,2) );

// 콜백 함수
// 비동기상황에서 사용(I/O), 언제 종료될지 모르는 상황에서
// 콜백함수를 전달해서 언젠가 작업이 끝나면 결과를 콜백함수에 
// 인자로 넣어서 호출하면 내가 받아서 다음 단계를 가겠다
function testCB( a, b, cb ){
  cb(a,b);
}
testCB( 100, 200, function(a, b){
  console.log( a, b);
});

// 객체(클레스정의)
// 4가지 방식
// 객체 리터럴 방식 (1회성 사용, 많은 데이터를 한번에 처리할때)
var person = {
  name:'ncia',
  age:4,
  talk:function(){
    return 'ncia talk'
  }
};
console.log( person );
console.log( person.talk() );
// Object 확장 방식 ========================================
var person2  = new Object();
person2.name = 'ncia2'
person2.talk = function(){
  return 'ncia talk2'
}
console.log( person2 );
console.log( person2.talk() );
// 생성자 함수 사용 방식
function Person3(name, age)
{
  this.name = name;
  this.age  = age;
  // 객체를 계속 생성하면 함수 할당이 계속 발생되어 
  // 메모리를 소모하게 된다 => 해결방안 => prototype
  this.talk = function(){
    return 'ncia talk3'
  }
}
var person3 = new Person3('ncia3', 4);
console.log( person3 );
console.log( person3.talk() );
// 생성자 함수 + prototype 방식
function Person4(){}
Person4.prototype.name = 'ncia4';
Person4.prototype.talk = function(){
  return this.name;
}
var person4 = new Person4();
console.log( person4 );
console.log( person4.talk() );

// => 표준에서 => class .. 방식으로 정립 
// (prototype 사용을 기반으로 설계되어 있다)
