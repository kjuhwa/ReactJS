/*
이벤트 분석에 따른 액션 설정
- 증가 버튼을 눌렀다 -> 값이 증가한다
- 감소 버튼을 눌렀다 -> 값이 감소한다
- 증감폭값을 설정했다 -> 증감폭 데이터가 변경된다
*/
// 액션 정의
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const STEP_RATE = 'STEP_RATE'

// 액션을 생성할 함수
export function increment () {
 return { type:INCREMENT }
}
export function decrement () {
 return { type:DECREMENT }
}
export function setStepRate (value) {
 console.log('action=>', value)
 return { type:STEP_RATE, rate:value }
}

