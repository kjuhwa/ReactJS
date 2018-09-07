// 1. 모듈 가져오기 ==============================================================
// 액션을 가져온다
import {INCREMENT,DECREMENT,STEP_RATE} from '../actions'
// 리듀서(flux의 store) 생성
import {combineReducers} from 'redux'

// 2. 초기상태 저장소 생성 ========================================================
// n개의 리듀서를 묶는 역할 combineReducers 담당
// 초기 상태를 의미하고, 저장소의 역할
const counterInitState = {
    // 카운터값
    value:0,
    // 증감폭
    step:1
}
// n개를 만들려고 임시로 구성
const dumpInitState = {
    value:'dumy'
}

// 3. 리듀서 만들기 ==============================================================
// 액션에 의해 저장소의 값들을 변경하는 역할 담당 리듀서
// 값의 변경은 flux 처럼 직접 수정 불가 -> 순수 함수를 통해 치환해야 한다. -> 수정
const counterReducer = (state=counterInitState, action)=>{
    switch(action.type){
        case INCREMENT: 
        return Object.assign({},state,{value:state.value + state.step})
        case DECREMENT: 
        return Object.assign({},state,{value:state.value - state.step})
        case STEP_RATE:
        return Object.assign({},state,{step:action.rate})
        // 어떤 액션에도 해당되지 않는다 -> 원본을 그대로 치환
        default: return state
    }
}
const dumpReducer = (state=dumpInitState, action)=>{
    return state
}

// 4. 리듀서 컴바인 ==============================================================
const reducerTotal = combineReducers({
    counterReducer,
    dumpReducer
})

// 5. 모듈화 =====================================================================
export default reducerTotal