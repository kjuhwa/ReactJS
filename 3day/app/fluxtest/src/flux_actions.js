import {dispatcher} from './flux_dispatcher'
// 액션 정의
// 입력창 입력 => UPDATE_TRAVEL
// 여행지 등록 => SEND_TRAVEL
// 액션의 네이밍은 대문자로 가급적 사용
export const ActionType = {
 UPDATE_TRAVEL:'UPDATE_TRAVEL',
 SEND_TRAVEL:'SEND_TRAVEL'
}
// 액션의 생성하여 디스패치에 전달
export const Actions = {
 // travel: 사용자가 입력창에 입력한 값(키보드를 칠때마다 발동)
 updateTravel:(travel)=>{
  // 갱신 내용이 없으면 중단
  if( travel === null ) return
  // 액션을 발생하여 dispatch로 전달

  dispatcher.dispatch({
   actionType:ActionType.UPDATE_TRAVEL,
   value:travel
  })
 },
 sendTravel:()=>{
  // 액션을 발생하여 dispatch로 전달
  dispatcher.dispatch({
   actionType:ActionType.SEND_TRAVEL
  })
 }
}