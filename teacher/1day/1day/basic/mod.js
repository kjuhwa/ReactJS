// 모듈화의 대상, 
// 개별 모듈화 : 변수, 함수
// 객체 모듈화 : 객체 (개별 모듈화를 감싼 느낌)
var name  = 'ncia'
// 개별 모듈화
exports.name2 = 'ncia2'
function a(){
    return name
}
//exports.a2 = function(){
exports.a2 = () => {
    return name
}
