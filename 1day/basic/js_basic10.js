// ES6 모던 자바스크립트
// standardjs.com
/*
1) 문장의 끝에 세미콜론 제외
2) 문자열은 홀따옴표만 사용
3) 탭 대신 공백 2개로 여백 사용
4) 함수 이름뒤에 공백
5) 비교 연산자에서 == 대신 === 사용
   "05" == 5 : true : 숫자로 변환할수 있으면 변환해서 비교를 하기 때문에
   "05" === 5 : false : 자료형까지 비교한다
   null, undefined는 == 사용 가능

모듈 검색 : http://www.npmjs.com
표준 체크 모듈을 설치하여 표준화 확인
> npm install -g standard
> mkdir st_test
> cd st_test
> standard --fix
> a.js가 표준코드로 변환되어 있다
*/
console.log("05"==5);
console.log("05"===5);


