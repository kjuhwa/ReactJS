// 단독 컴포넌트만 있는 코드
// 1. import 
import React, { Component } from 'react'
// 2. 컴포넌트 정의
class MyInput extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            jumin:''
        }
    }
    onChangeHandler (e) {
        console.log(e.target.value);
        // 입력값 체크하여 숫자만 세팅
        const chgNumValue = e.target.value.replace(/[^0-9]/g,'')
        // 상태값에 수정 -> render() -> 화면 표시
        this.setState( {jumin:chgNumValue} )        
    }
    onSubmitHandler (e) {
        // 전송 이벤트 중단 -> SPA 형식에 부적합
        console.log( e.target.value )
        e.preventDefault()
        // ajax 통신등등 작업 진행
        // 임의로 초기화 진행
        this.setState( {jumin:''} )
    }
    render () {
        var onChangeHandler = (e) => this.onChangeHandler(e)
        var onSubmitHandler = (e) => this.onSubmitHandler(e)
        return (
            <div>
                <form onSubmit={onSubmitHandler}>
                    {/* 숫자만 입력받고 싶다 */}
                    <input type='text' value={this.state.jumin} onChange={onChangeHandler}/>
                    <input type='submit' value='전송'/>
                </form>
            </div>
        )
    }
}
// 3. 모듈화
export default MyInput