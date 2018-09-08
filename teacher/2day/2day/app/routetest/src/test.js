// superagent 테스트 (ajax 전용)
// http://api.manana.kr/exchange/rate/KRW/JPY,EUR,USD.json
const request = require('superagent')
const url = 'https://dapi.kakao.com/v2/search/image'

// 요청
request.get(url)
 .query({query:'삿포로'})
 .set('Authorization', 'KakaoAK b9b38c3bd5a7a26d5b41537ba5dc14fc')
 .end((err, res)=>{
  if(err) return
  console.log(res.body);  
})