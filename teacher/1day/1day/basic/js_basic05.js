// ES6 모던 자바스크립트 
// 함수의 기본값 주기 (C++, python 영향)
function getUserInfo(name='양재', age=100)
{
    console.log(`${name}의 나이는 ${age}이다`);
}
getUserInfo()
getUserInfo('ncia')
// 인자값의 순서대로 값을세팅
getUserInfo('ncia', 50)
getUserInfo(50)
// 적용않됨 => 첫번째 인자로 된다
// age= 의도대로 적용않됨
getUserInfo(age=61)
// ==============================================
// 애로우(화살표) 함수
const test = function (fName) {
    return `${fName} 테스트`
}
// 기본 : function 제거, 인자와 코드블럭 사이 => 삽입
const test2 = (fName) => {
    return `${fName} 테스트`
}
// 인자가 1개이면 () 생략 가능
const test3 = fName => {
    return `${fName} 테스트`
}
// 수행문이 1개이고, 그게 리턴이면 {}, return 생략 가능
const test4 = fName   => `${fName} 테스트`
const test5 = (fName) => `${fName} 테스트`

console.log( test4('hi') )

// 가장 기본만 가진 애로우 함수
const test6 = ()=>{}

// ==============================================
// 애로우 함수의 this 용법 해결방안
var thisTest = {
    city:['서울','부산','대전','제주'],
    print:function (delay=1000) {
        setTimeout( function(){
            console.log(`call ${this.city[0]}`);
        }, delay);
    }
}
//thisTest.print()

var thisTest2 = {
    city:['서울','부산','대전','제주'],
    print:function (delay=1000) {
        setTimeout( () => {
            console.log(`call ${this.city[0]}`);
        }, delay);
    }
}
thisTest2.print()

var thisTest3 = {
    city:['서울','부산','대전','제주'],
    print: (delay=1000) => {
        setTimeout( () => {
            console.log(`call ${this.city[0]}`);
        }, delay);
    }
}
//thisTest3.print()

var thisTest4 = {
    city:['서울','부산','대전','제주'],
    print: (delay=1000) => {
        setTimeout( function(){
            console.log(`[4] call ${this.city[0]}`);
        }, delay);
    }
}
//thisTest4.print()