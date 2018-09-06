// 단독 컴포넌트만 있는 코드
// 1. import
import React, {Component} from 'react'

// 2. 컴포넌트 정의
class MySelect extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            // select에서 선택된 항목값
            myChoice:props.value
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)  
        this.onSubmitHandler = this.onSubmitHandler.bind(this)  
    }
    onChangeHandler (e) {
        this.setState( { myChoice:e.target.value } )
    }
    onSubmitHandler (e) {
        // 전송 이벤트 중단 -> SPA 형식에 부적합
        e.preventDefault()
        console.log(this.state.myChoice);
    }
    render () {
        const options = this.props.items.map(item=>
            <option key={item}>{item}</option>
        )
        return (
            <div style={ { margin:20 } }>
                <fieldset>
                    <form onSubmit={this.onSubmitHandler}>
                        <select onChange={this.onChangeHandler} value={this.state.myChoice}>
                            {options}
                        </select>
                        &nbsp;
                        <input type='submit' value='전송' />
                    </form>
                </fieldset>
            </div>
        )
    }
}

// 3. 모듈화
export default MySelect