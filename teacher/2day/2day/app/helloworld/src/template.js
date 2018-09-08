// 단독 컴포넌트만 있는 코드
// 1. import 
import React, { Component } from 'react'
// 2. 컴포넌트 정의
class MyInput extends Component
{
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div>
                hi
            </div>
        )
    }
}
// 3. 모듈화
export default MyInput