import {dispatcher} from './flux_dispatcher'
import {ActionType} from './flux_actions'

// 스토어 생성
export const travelStore = { 
 travel:'',
 onChange:null
}
// 등록버튼을 누르면 데이터를 일부 가공해서 저장
export const travelRegiStore = { 
 msg:'',
 onChange:null
}

// 디스패처를 이용하여 액션을 디스패치하고 저장소에 저장처리
// 입력값 업데이트 상황
dispatcher.register( (act)=>{
 // 대기하고 있다가 액션이 하나 왔는데 그것을 패치해보니
 // 액션이 입력값 업데이트 였다
 if( act.actionType === ActionType.UPDATE_TRAVEL ){
  travelStore.travel = act.value
  // 입력값 업데이트 됬음을 함수 호출을 통해 알림
  travelStore.onChange()
 }
} )
dispatcher.register( (act)=>{
 if( act.actionType === ActionType.SEND_TRAVEL ){
  travelRegiStore.msg = `${travelStore.travel}는 굿잡!`
  travelRegiStore.onChange()
 }
} )