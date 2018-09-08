// ES6(2016년도) 모던 자바스크립트
// 변수의 선언부 추가
// 기존 var
// ES6부터는 const(상수), let(동일 이름 변수 범위에대한)
// 변수
var ani_type = 'dog'
ani_type     = 'cat'
console.log('변수값이 변경되도 문제 없음', ani_type);
// 상수 (immutable) => 함수, 객체받을때, 순수 상수값
const ani_type2 = 'dog'
try{
  ani_type2 = 'cat'
}catch(err){
  console.log(ani_type2, err);
}
// let
var topic = 'node'
if(topic){
  // 결국은 같은 변수이다
  var topic = 'react'
  console.log('지역', topic);
}
console.log('전역', topic);

var topic2 = 'node'
if(topic2){
  // 변수의 적용범위를 적용하여 원래 의도대로 변수가 세팅됨다
  let topic2 = 'react'
  console.log('지역', topic2);
}
console.log('전역', topic2);