// superagent 테스트 (ajax 전용)
// http://api.manana.kr/exchange/rate/KRW/JPY,EUR,USD.json
const request = require('superagent')
const url = 'https://dapi.kakao.com/v2/search/image'

// 요청
request.get(url)
.query({query:'삿포르'})
.set('Authorization', 'KakaoAK 9a9adda49bcc25279e4d15d552bf4b50')
.end((err, res)=>{
 if(err) return
 console.log( res.body );
})