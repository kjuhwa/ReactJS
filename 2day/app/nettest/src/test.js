// superagent 테스트 (ajax 전용)
// http://api.manana.kr/exchange/rate/KRW/JPY,EUR,USD.json
const request = require('superagent')
const url = 'http://api.manana.kr/exchange/rate/KRW/JPY,EUR,USD.json'

// 요청
request.get(url).end((err, res)=>{
 if(err) return
 res.body.map( (item)=>{
    console.log( item.name, item.rate );
 } )
})