// 단독 컴포넌트만 있는 코드
// 1. import
import React, {Component} from 'react'

// 2. 컴포넌트 정의
class MyInput extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            
        }
    }
    render () {
        return (
            <div>
                <form>
                    <input type='text' value='' />
                    <input type='submit' value='전송' />
                </form>
            </div>
        )
    }
}

// 3. 모듈화
export default MyInput