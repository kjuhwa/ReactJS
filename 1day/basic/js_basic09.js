// ES6 모던 자바스크립트
// 모듈 가져오기
// nodejs에서 정립이 된개념 => python import or 타 언어 include 느낌
// 여러개 코드에서 모듈을 가져와도 메모리 로드는 1회
// 나머지는 참조해서 사용됨
// commonjs 표현식
var test = require('./mod')
console.log(test.name2, test.a2());

// 표준에서는 해당 모듈에서 필요한것만 가져올수 있다
// 무조건 다 가져오는것이 아니라
// 파이썬의 모듈 가져오기 풀버전을 뒤집에서 표현

// 구동을 위해서는 바벨로 변한되서 처리되어야함
//import {name2} from './mod'
//console.log(name2);
