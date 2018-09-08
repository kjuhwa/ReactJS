// 단독 컴포넌트만 있는 코드
// 1. import 
import React, { Component } from 'react'
// 2. 컴포넌트 정의
class MySelect extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            // select에서 선택된 항목값 
            myChoice:props.value
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    onSubmitHandler (e) {
        // 전송 이벤트 중단 -> SPA 형식에 부적합
        e.preventDefault()
        console.log( this.state.myChoice )
    }
    onChangeHandler (e) {
        // 상태값 수정
        this.setState( { myChoice:e.target.value } )
    }
    render () {
        // select의 옵션 동적 생성
        const options = this.props.items.map( item => 
            <option key={ item }>{ item }</option> 
        )
        return (
            <div style={ { margin:20 } }>
                <fieldset>
                    <form onSubmit={this.onSubmitHandler}>
                        <select value={this.state.myChoice} onChange={this.onChangeHandler}>
                            {options}
                        </select>
                        &nbsp;                  
                        <input type='submit' value='전송'/>
                    </form>
                </fieldset>
            </div>
        )
    }
}
// 3. 모듈화
export default MySelect