// ES6 모던 자바스크립트
// 프라미스 패턴 (2015, 2016, 2017)
// 콜백헬을 해결하기 위해 등장 => 서브파트모듈 async (3모델지원)
// 비동기 작업을 쉽게 처리하기 위해 등장
/*
1. Promise
2. Generator
3. async ~ await
*/
// 요구사항 a.txt를 읽고, b.txt를 읽고, c.txt를 읽는다
// 파일을 읽는다 => I/O => 비동기
const fs = require('fs')
/*
fs.readFile('a.txt', 'utf-8', (err,data)=>{
    console.log(data);
    fs.readFile('b.txt', 'utf-8', (err,data2)=>{
        console.log(data2);
        fs.readFile('c.txt', 'utf-8', (err,data3)=>{
            console.log(data3);
        })
    })
})
*/
////////////////////////////////////////////////////////////////
// 1. Promise
/*
function readFileProc( fName ) {
    return new Promise( (cb)=>{
        fs.readFile(fName, 'utf-8', (err,data)=>{
            cb(data)
        })
    } )
}
// 사용
readFileProc('a.txt')
.then( (text)=>{
    console.log(text);
    return readFileProc('b.txt')
} )
.then( (text)=>{
    console.log(text);
    return readFileProc('c.txt')
} )
.then( (text)=>{
    console.log(text);
} )
*/
////////////////////////////////////////////////////////////////
// 3. ES2017 async ~ await
function readFileProc2017( fName ) {
    return new Promise( (cb, reject)=>{
        fs.readFile(fName, 'utf-8', (err,data)=>{
            cb(data)
        })
    } )
}
// 정의
async function readFileAll() {
    const a = await readFileProc2017('a.txt')
    console.log(a)
    const b = await readFileProc2017('b.txt')
    console.log(b)
    const c = await readFileProc2017('c.txt')
    console.log(c)
}

// 사용
//readFileAll()

////////////////////////////////////////////////////////////////
// 2. ES6 Generator
function readFileProcES6( g, fName ) {
    fs.readFile(fName, 'utf-8', (err,data)=>{
        // g.next) => 이터레이터 반복자, 이 작업이 소진(완료) 된다면
        // 다음 작업을 진행하게 하는 함수
        g.next( data )
    })
}

// 제너레이터
const g = (function * (){
    // yield : 바로 반환하지 않고, 작업이 완료되면 순차 반환
    const a = yield readFileProcES6(g, 'a.txt')
    console.log(a)
    const b = yield readFileProcES6(g, 'b.txt')
    console.log(b)
    const c = yield readFileProcES6(g, 'c.txt')
    console.log(c)
})()

// 사용
g.next()